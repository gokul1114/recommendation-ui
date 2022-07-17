// import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { SERVER_URL } from "../App";
import { useState } from "react";


export function Login() {
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
        });
        const email = data.get('email');
    
        const body = {email}
        console.log(JSON.stringify(body))
        fetch(`${SERVER_URL}user/login`
          ,{
              method : 'POST',
              headers : { 'Content-Type': 'application/json' },
              body : JSON.stringify(body)
          })
          .then((data) => data.json())
          .then((result) => {
            localStorage.setItem("userDetails",JSON.stringify(result))
            alert('Login Successful');
            navigate('/landing')
          });
      };
    return (
        <div>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>
        </div>
    )
}