// /** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://muinlock.kr/">
        MuinLock System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function LogIn() {
  const [ body, setBody ] = useState({ userId: '', userPw: '' })

  const inputChagne = ({target}) => {
    const { name, value } = target
    setBody({
      ...body,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    axios.get("http://localhost:3001/api/member", {params:{ userId: body.userId, userPw: body.userPw }})
    .then((res) => {
      if(res.data === "success"){
        console.log("login OK")
      }else{
        console.log("Login Fail")
      }
    })
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img src = "./images/logo200.png" alt='logo' width='100'   />
          <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
            <strong style={{ color: 'gray' }}>M</strong>obile <strong style={{ color: 'gray' }}>L</strong>ocker <strong style={{ color: 'gray' }}>A</strong>dmin
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userId"
              label="ID"
              name="userId"
              autoComplete="off"
              autoFocus
              // ref={userIdRef}
              value={body.userId}
              onChange={inputChagne}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="userPw"
              label="Password"
              type="password"
              id="userPw"
              autoComplete="current-password"
              // ref={userPwRef}
              value={body.userPw}
              onChange={inputChagne}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}