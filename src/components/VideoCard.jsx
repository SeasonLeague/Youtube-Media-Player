import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{
    width: { xs: '100%', sm: '340px', md: '340px' },
    maxWidth: '400px',
    boxShadow: 'none', 
    borderRadius: 2,
    margin: { xs: 'auto', sm: 0 }
  }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        alt={snippet?.title} 
        sx={{ 
          width: '100%', 
          height: { xs: 200, sm: 180, md: 180 },
          borderRadius: 1
        }} 
      />
    </Link>
    <CardContent sx={{ 
      backgroundColor: "#1E1E1E", 
      minHeight: { xs: 'auto', sm: '80px' },
      padding: { xs: 1, sm: 2 }
    }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography 
          variant="subtitle1" 
          fontWeight="bold" 
          color="#FFF"
          sx={{ 
            fontSize: { xs: '0.9rem', sm: '1rem' },
            lineHeight: 1.4,
            mb: 1
          }}
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography 
          variant="subtitle2" 
          color="gray"
          sx={{ 
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;