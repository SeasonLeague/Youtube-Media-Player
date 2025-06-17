import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;

  return (
    <Stack 
      direction={direction || "row"} 
      flexWrap="wrap" 
      justifyContent={{ xs: "center", sm: "start" }}
      alignItems="start" 
      gap={{ xs: 2, sm: 2, md: 2 }}
      sx={{
        width: '100%',
        padding: { xs: 1, sm: 0 }
      }}
    >
      {videos.map((item, idx) => (
        <Box 
          key={idx}
          sx={{
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '100%', sm: '340px' }
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;