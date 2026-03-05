import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Skills(){
    return(
        <Container sx={{mt:15}}>
            <Typography variant="h4" fontWeight="bold" textAlign="center">Skills and Tools</Typography>
                <Typography variant="h6" sx={{mt:2}} textAlign="center">The technologies I use to turn ideas into working software.</Typography>
                <Typography variant="h5" fontWeight="bold" sx={{mt:4}}>Languages</Typography>
                    <Grid sx={{mt:2}}>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>C++</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>JavaScript</Paper>
                    </Grid>

                <Typography variant="h5" fontWeight="bold" sx={{mt:4}}>Web Technologies</Typography>
                    <Grid sx={{mt:2}}>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>React</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>React Router</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>HTML</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>CSS</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>Tailwind CSS</Paper>
                    </Grid>

                <Typography variant="h5" fontWeight="bold" sx={{mt:4}}>State Management</Typography>
                    <Grid sx={{mt:2}}>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>React Hooks</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>Redux Toolkit</Paper>
                    </Grid>

                <Typography variant="h5" fontWeight="bold" sx={{mt:4}}>Backend & Databases</Typography>
                    <Grid sx={{mt:2}}>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>Firebase Authentication</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>Firebase</Paper>
                    </Grid>

                    <Typography variant="h5" fontWeight="bold" sx={{mt:4}}>Developer Tools</Typography>
                    <Grid sx={{mt:2}}>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>Git</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>GitHub</Paper>
                        <Paper variant="elevation" elevation={3} sx={{display:"inline-block",py:2,px:3,m:2,borderRadius:"30px"}}>VSCode</Paper>
                    </Grid>
        </Container>
    )

}

export default Skills;