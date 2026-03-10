import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profilePic from '../assets/profile/profile.jpeg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import DownloadIcon from "@mui/icons-material/Download"
import React from "react";
import { FaHtml5,FaCss3Alt,FaReact,FaGitAlt,FaGithub,FaNpm,FaFire } from "react-icons/fa";
import { IoLogoJavascript,IoLogoVercel } from "react-icons/io5";
import { SiTailwindcss,SiRedux,SiMui } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

function Home(){
    return(
        <Container sx={{mt:15}}>
            <Grid  container spacing={4} alignItems="center">
                <Grid size={{sm:12, md:6}}>
                    <Typography variant="h3" fontWeight="bold">Hi, I'm Apoorva</Typography>
                    <Typography variant="h5" sx={{ mt: 1 }}>Software Developer</Typography>
                    <Typography sx={{mt:1}}>I'm an Electronics and Communication engineer currently transitioning into software development. I enjoy solving problems, building web applications, and learning how different technologies work together to create real products.</Typography>
                    <Typography sx={{mt:1}}>Outside of tech, I enjoy reading books, learning new things, and exploring ideas that help me grow personally. I believe in continuous learning, curiosity, and building things that are both useful and meaningful.</Typography>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                            xs: "repeat(4, 1fr)",
                            sm: "repeat(6, 1fr)",
                            md: "repeat(8, 1fr)",
                            lg: "repeat(12, 1fr)"
                            },
                            gap: 3,
                            maxWidth: 700,
                            mt: 4,
                            "& svg": {
                            fontSize: 26,
                            justifySelf: "center",
                            opacity: 0.8,
                            transition: "0.2s"
                            },
                            "& svg:hover": {
                            transform: "scale(1.15)",
                            opacity: 1
                            }
                        }}
                        >
                        <TbBrandCpp />
                        <FaHtml5 />
                        <FaCss3Alt />
                        <IoLogoJavascript />
                        <FaReact />
                        <SiRedux />
                        <FaFire />
                        <SiTailwindcss />
                        <SiMui />
                        <FaGitAlt />
                        <FaGithub />
                        <IoLogoVercel />
                    </Box>
                    <Button variant="outlined" sx={{mt:5,mr:2,borderRadius:"16px"}}
                    component="a"
                    href="/Resume_Apoorva.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                        <DownloadIcon sx={{mr:0.5}}/>Resume
                    </Button>
                    <Button variant="outlined" sx={{mt:5, mr:2,borderRadius:"16px"}}
                    component="a"
                    href="https://github.com/Apoorva65"
                    target="_blank"
                    rel="noopener noreferrer">
                        <GitHubIcon />
                    </Button>
                    <Button variant="outlined" sx={{mt:5,mr:2,borderRadius:"16px"}}
                    component="a"
                    href="https://www.linkedin.com/in/apoorva-dixit-0b6698217/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <LinkedInIcon />
                    </Button>
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