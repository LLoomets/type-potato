import React, { FormEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const MyForm = () => {

    const [form, setForm] = useState({ username:"", password:""});

    /* const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); */

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(form);

        /* console.log({ username, password }); */
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        /* setForm(prevForm => {
            return {
            }
        }) */

        setForm(prevForm => ({
            ...prevForm,
            [event.target.name]: event.target.value
        }));
    };

    /* useEffect(() => {
        console.log("Renders every time");
    });

    useEffect(() => {
        console.log("Renders first time");
    }, []);

    useEffect(() => {
        console.log("Renders every time username changes");
    }, [username]); */

  return (
    <Box
        sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh'
         }}
    >
        <form onSubmit={handleSubmit}>
            <Stack gap={2}>
                <TextField
                required
                name='username'
                id="outlined-required"
                label="Username"
                /* onChange={(event) => setUsername(event.target.value)} */
                onChange={handleChange}
                />

                <TextField
                required
                name='password'
                id="outlined-required"
                label="Password"
                /* onChange={(event) => setPassword(event.target.value)} */
                onChange={handleChange}
                />

                <Button variant="contained" type='submit'>Login</Button>
            </Stack>
        </form>
        
    </Box>
    
  )
}

export default MyForm
