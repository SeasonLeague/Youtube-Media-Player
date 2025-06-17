import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" sx={{ padding: { xs: 1, sm: 0 } }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2, md: 0 }}>
        <Box flex={1}>
          <Box sx={{ 
            width: { xs: "100%", md: "97%" }, 
            position: "sticky", 
            top: "10px",
            padding: { xs: 1, sm: 2 },
            borderRadius: '30px'
          }}>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`} 
              className="react-player" 
              controls 
              width="100%"
              height="auto"
            />
            <Typography 
              color="#fff" 
              variant="h5" 
              fontWeight="bold" 
              p={{ xs: 1, sm: 2 }}
              sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}
            >
              {title}
            </Typography>
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              justifyContent="space-between" 
              sx={{ color: "#fff" }} 
              py={1} 
              px={{ xs: 1, sm: 2 }}
              spacing={{ xs: 1, sm: 0 }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography 
                  variant={{ xs: "subtitle2", sm: "subtitle1", md: 'h6' }}
                  color="#fff"
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                gap={{ xs: "5px", sm: "20px" }} 
                alignItems={{ xs: "start", sm: "center" }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.7,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.7,
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box 
          px={{ xs: 1, sm: 2 }} 
          py={{ xs: 2, sm: 1, md: 1 }} 
          justifyContent="center" 
          alignItems="center"
          sx={{ width: { xs: '100%', md: 'auto' } }}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;