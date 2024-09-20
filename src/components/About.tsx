import React, { FormEvent, useState } from "react"
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material"
import bgImage from "../bgImage.png"

export default function About() {
  const [form, setForm] = useState({ name: "", message: "" })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(form)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  const name = "Liisi Loomets"
  const hobbies = ["Cooking", "Eating", "Drinking"]

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 4,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: "white" }}
      >
        {name}
      </Typography>

      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "white" }}
      >
        My Hobbies
      </Typography>
      <List>
        {hobbies.map((hobby, index) => (
          <ListItem key={index}>
            <Typography
              variant="body1"
              sx={{ color: "white" }}
            >
              {hobby}
            </Typography>
          </ListItem>
        ))}
      </List>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "400px",
            marginTop: 6,
          }}
        >
          <TextField
            name="name"
            label="Name"
            placeholder="Enter your name"
            sx={{ marginBottom: 2 }}
            InputProps={{ sx: { backgroundColor: "white" } }}
            onChange={handleChange}
          />

          <TextField
            name="message"
            label="Message"
            placeholder="Enter your message"
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
            InputProps={{ sx: { backgroundColor: "white" } }}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "darkblue" }}
          >
            Send
          </Button>
        </Box>
      </form>
    </Box>
  )
}
