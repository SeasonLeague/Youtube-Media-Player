import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: "row", md: "column" }}
    sx={{
      overflowY: "auto",
      overflowX: { xs: "auto", md: "visible" },
      height: { xs: "auto", md: "95%" },
      flexDirection: { xs: "row", md: "column" },
      gap: { xs: 1, md: 0 },
      pb: { xs: 2, md: 0 },
      '&::-webkit-scrollbar': {
        height: { xs: '4px', md: '0px' }
      }
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? "#0000ff" : "transparent",
          color: "white",
          minWidth: "fit-content",
          whiteSpace: "nowrap"
        }}
        key={category.name}
      >
        <span style={{ 
          color: category.name === selectedCategory ? "white" : "blue", 
          marginRight: "15px",
          fontSize: "1.2rem"
        }}>
          {category.icon}
        </span>
        <span style={{ 
          opacity: category.name === selectedCategory ? "1" : "0.8",
          fontSize: "0.9rem"
        }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;