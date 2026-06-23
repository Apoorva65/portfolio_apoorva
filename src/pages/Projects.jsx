import React from "react";
import { Container, Typography, Stack, Box, Button, Divider } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import { FaReact, FaFire, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiExpress, SiSqlite, SiMui } from "react-icons/si";
import { IoLogoVercel, IoLogoJavascript } from "react-icons/io5";
import Icon from '@mui/material/Icon';

function Projects() {

  const Project = ({title, description, children, github, live}) => (
    <Box
        sx={{
            py:6,
            pl:3,
            borderLeft:"2px solid",
            borderColor:"divider",
            transition:"0.25s",
            "&:hover":{
            borderColor:"primary.main",
            transform:"translateX(6px)"
            }
        }}
        >

      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>

      <Typography sx={{mt:2, maxWidth:700}} color="text.secondary">
        {description}
      </Typography>

      <Stack direction="row" spacing={2} sx={{mt:3}}>
        {children}
      </Stack>

      <Stack direction="row" spacing={2} sx={{mt:3}}>
        <Button
          startIcon={<GitHubIcon/>}
          component="a"
          href={github}
          target="_blank"
        >
          GitHub
        </Button>

        {live && (<Button
          startIcon={<LaunchIcon/>}
          component="a"
          href={live}
          target="_blank"
        >
          Live Demo
        </Button>)}
      </Stack>

      <Divider sx={{mt:6}}/>

    </Box>
  )


  return (
    <Container maxWidth="md" sx={{mt:15}}>

      <Typography variant="h4" fontWeight="bold" textAlign="center">
        Projects
      </Typography>

      <Typography
        variant="h6"
        textAlign="center"
        sx={{mt:2, maxWidth:600, mx:"auto", fontWeight:"bold"}}
        color="text.secondary"
      >
        Projects that demonstrate my problem-solving skills and experience with modern web technologies.
      </Typography>

      <Project
        title="Quillo"
        description="Quillo is a full stack blogging application built with React, Node.js, Express, and SQLite. It features JWT-based authentication and protected routes, allowing users to securely create, view, edit, and delete their own blog posts. The application supports rich text content creation and optional cover image uploads, with post data stored persistently in the database."
        github="https://github.com/Apoorva65/quillo"
      >
        <FaReact size={22}/>
        <FaNodeJs size={22}/>
        <SiExpress size={22}/>
        <SiSqlite size={22}/>
        <SiMui size={22}/>
        <IoLogoVercel size={22}/>
      </Project>

      <Project
        title="NoteNest"
        description="NoteNest is a full stack notes application built with React, Node.js, Express, and SQLite. It allows users to create, view, edit, and delete notes with data stored persistently in a SQLite database."
        github="https://github.com/Apoorva65/NoteNest"
      >
        <FaReact size={22}/>
        <FaNodeJs size={22}/>
        <SiExpress size={22}/>
        <SiSqlite size={22}/>
        <SiTailwindcss size={22}/>
        <IoLogoVercel size={22}/>
      </Project>

      <Project
        title="Habio"
        description="Habio is a full stack habit tracker built with React, Material UI, Node.js, Express, and SQLite. Users can create habits, mark daily completion, track streaks, and view a simple 7 day heatmap of progress."
        github="https://github.com/Apoorva65/habio"
      >
        <FaReact size={22}/>
        <FaNodeJs size={22}/>
        <SiExpress size={22}/>
        <SiSqlite size={22}/>
        <SiMui size={22}/>
        <IoLogoVercel size={22}/>
      </Project>

      <Project
        title="Syncro"
        description="Syncro is a project and task management web app built with React, Redux and Firebase. It allows users to create projects, manage tasks within each project, and track task completion with a clean and minimal UI."
        github="https://github.com/Apoorva65/react_syncro"
        live="https://react-syncro.vercel.app/login"
      >
        <IoLogoJavascript size={22}/>
        <FaReact size={22}/>
        <SiRedux size={22}/>
        <FaFire size={22}/>
        <SiTailwindcss size={22}/>
        <IoLogoVercel size={22}/>
      </Project>

      {/* <Project
        title="NoteNest"
        description="NoteNest is an offline-first notes application built with React that supports creating, editing, searching, and deleting notes with automatic saving, using React Router for navigation and LocalStorage for persistent storage."
        github="https://github.com/Apoorva65/NoteNest"
        live="https://note-nest-alpha.vercel.app/"
      >
        <IoLogoJavascript size={22}/>
        <FaReact size={22}/>
        <SiTailwindcss size={22}/>
        <IoLogoVercel size={22}/>
      </Project> */}


      <Project
        title="CostIQ"
        description="CostIQ is a simple expense management web application built with React. It allows users to track daily expenses, categorize them, view summaries, and manage data with full CRUD functionality."
        github="https://github.com/Apoorva65/CostIQ"
        live="https://cost-iq.vercel.app/"
      >
        <IoLogoJavascript size={22}/>
        <FaReact size={22}/>
        <FaCss3Alt size={22}/>
        <IoLogoVercel size={22}/>
      </Project>

    </Container>
  )
}

export default Projects;