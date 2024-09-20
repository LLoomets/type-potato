import React from "react"
import { Box, Typography } from "@mui/material"
import bgImage from "../bgImage.png"

export default function HomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold" }}
      >
        Welcome to My Website!
      </Typography>
    </Box>
  )
}
