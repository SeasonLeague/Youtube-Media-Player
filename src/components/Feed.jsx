import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Machine Learning");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ 
        height: { xs: "auto", md: "92vh" }, 
        borderRight: { xs: "none", md: "1px solid #0000ff" }, 
        borderBottom: { xs: "1px solid #0000ff", md: "none" },
        px: { xs: 1, md: 2 },
        py: { xs: 2, md: 0 }
      }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography 
          className="copyright" 
          variant="body2" 
          sx={{ 
            mt: 1.5, 
            color: "#ffffff",
            display: { xs: 'none', md: 'block' }
          }}
        >
          Copyright © 2024 ML Recommendations
        </Typography>
      </Box>

      <Box 
        p={{ xs: 1, sm: 2 }} 
        sx={{ 
          overflowY: "auto", 
          height: { xs: "auto", md: "90vh" }, 
          flex: 2,
          width: { xs: '100%', md: 'auto' }
        }}
      >
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          mb={2} 
          sx={{ 
            color: "white",
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          {selectedCategory} <span style={{ color: "#00ffff" }}>recommendations</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;