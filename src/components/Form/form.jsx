import { Box, FormControlLabel, TextField, Checkbox, Button, Typography, Grid, Link, Container } from '@mui/material';
import React from 'react'

function Formulario() {
  return (
    <>
    <Container component="main" maxWidth="xs">
        <Box sx={{
            marginTop:8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <Typography component= "h2" variant="h5">
                Formuláio de login
            </Typography>
            <Box component="form" sx={{ mt:1 }}>
                <TextField fullWidth margin="normal" label="Email" nome="email" variant="filled"/>
                <TextField fullWidth margin="normal" label="Senha" type="password" variant="filled"/>
                <FormControlLabel
                control={<Checkbox valeu="remember" color="primary"/>}
                label="Lembrar-me"
                />
                <Button fullWidth type="submit" variant="contained" sx={{mt:4, mg:2}}>Login</Button>
                <Grid container>
                    <Grid item xs> 
                        <Link href="#">Esqueci minha senha</Link>
                    </Grid>
                    <Grid item>
                        <Link href="#"> Cadastre-se</Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </Container>
    </>
  )
}

export default Formulario;