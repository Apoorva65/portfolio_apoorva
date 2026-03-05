import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profilePic from '../assets/profile/profile.jpeg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React from "react";

function Home(){
    return(
        <Container sx={{mt:15}}>
            <Grid  container spacing={4} alignItems="center">
                <Grid size={{sm:12, md:6}}>
                    <Typography variant="h3" fontWeight="bold">Hi, I'm Apoorva</Typography>
                    <Typography variant="h5" sx={{ mt: 1 }}>Software Developer</Typography>
                    <Typography sx={{mt:1}}>Aspiring Software Development Engineer with an Electronics and Communication Engineering background,
                    transitioning into software development. Strong foundation in C++ and Data Structures & Algorithms, with hands on
                    experience building real world React applications involving state management, CRUD operations, authentication, and
                    role based workflows. Passionate about writing clean, maintainable code and continuously improving problem solving
                    skills.</Typography>
                    <Button variant="outlined" sx={{mt:2,mr:2,borderRadius:"16px"}}>Resume</Button>
                    <Button variant="outlined" sx={{mt:2, mr:2,borderRadius:"16px"}}>Github</Button>
                    <Button variant="outlined" sx={{mt:2,mr:2,borderRadius:"16px"}}>LinkedIn</Button>
                </Grid>

                <Grid size={{sm:12, md:6}}>
                    <Box
                        component="img"
                        sx={{
                        width: 350,
                        height: 350,
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                        margin: "auto",
                        }}
                        alt="Apoorva"
                        src={profilePic}
                    />
                </Grid>
            </Grid>
            </Container>
    )
}

export default Home;