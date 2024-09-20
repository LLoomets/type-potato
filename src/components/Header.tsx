import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const pages = [
  { name: "Home", route: "/" },
  { name: "Login", route: "/form" },
  { name: "About", route: "/about"}
]

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <RocketLaunchIcon sx={{ color: "white", mr: 1, fontSize: 40 }} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            {pages.map(page => (
              <Button
                key={page.name}
                component={Link}
                to={page.route}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
