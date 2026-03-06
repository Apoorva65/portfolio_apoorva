import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function Contact(){
    return(
        <Container sx={{mt:15}}>
            <Typography variant="h4" fontWeight="bold" textAlign="center">Contact</Typography>
                <Typography variant="h6" sx={{mt:2}} textAlign="center">Interested in working together or want to discuss opportunities?</Typography>
                <Typography variant="h6" sx={{mt:1}} textAlign="center">Feel free to reach out.</Typography>
                    
                    <Grid container spacing={4} sx={{mt:10}} justifyContent="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="center">
                                <Button
                                component="a"
                                href="mailto:apoorvasdixit@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <EmailIcon sx={{ fontSize: 40 }} />
                                </Button>

                                <Box>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    textAlign="center">
                                    EMAIL
                                </Typography>

                                <Typography textAlign="center">
                                    apoorvasdixit@gmail.com
                                </Typography>
                                </Box>

                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="center">
                                <Button
                                component="a"
                                href="https://www.linkedin.com/in/apoorva-dixit-0b6698217/"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <LinkedInIcon sx={{ fontSize: 40 }} />
                                </Button>

                                <Box>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    textAlign="center">
                                    LINKEDIN
                                </Typography>

                                <Typography textAlign="center">
                                    linkedin.com/in/apoorva-dixit-0b6698217/
                                </Typography>
                                </Box>

                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="center">
                                <Button
                                component="a"
                                href="https://github.com/Apoorva65"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <GitHubIcon sx={{ fontSize: 40 }} />
                                </Button>

                                <Box>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    textAlign="center">
                                    GITHUB
                                </Typography>

                                <Typography textAlign="center">
                                    github.com/apoorva65
                                </Typography>
                                </Box>

                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="center">
                                <LocationOnIcon sx={{ fontSize: 40 }} />

                                <Box>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    textAlign="center">
                                    LOCATION
                                </Typography>

                                <Typography textAlign="center">
                                    Bangalore, India
                                </Typography>
                                </Box>

                            </Stack>
                        </Grid>
                    </Grid>
        </Container>
    )
}

export default Contact;