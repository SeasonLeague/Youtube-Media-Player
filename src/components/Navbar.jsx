import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack 
    direction={{ xs: "column", sm: "row" }} 
    alignItems="center" 
    p={{ xs: 1, sm: 2 }} 
    sx={{ 
      position: "sticky", 
      background: '#000', 
      top: 0, 
      justifyContent: "space-between",
      gap: { xs: 2, sm: 0 },
      zIndex: 1000
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img 
        src={logo} 
        alt="logo" 
        height={45} 
        style={{ paddingRight: '15px', fontFamily: 'fantasy' }}
      />
      <Box sx={{ 
        color: 'white', 
        fontWeight: 'bold',
        fontSize: { xs: '1rem', sm: '1.2rem' }
      }}>
        ML RECOMMENDER
      </Box>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;