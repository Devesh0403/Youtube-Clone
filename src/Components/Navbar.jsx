import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      gap: { xs: 2, sm: 0 }, // Adds gap on small screens
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <img src={logo} alt="logo" height={45} style={{ marginRight: "10px" }} /> 
      <h2 style={{ color: "white", margin: 0 }}>Playora</h2>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
