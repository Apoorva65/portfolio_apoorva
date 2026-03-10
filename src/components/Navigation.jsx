import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';

function Navigation(){

    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);

    return(
        <AppBar position="fixed" sx={{ flexGrow: 1,backgroundColor: "rgba(40,40,40,0.9)", backdropFilter: "blur(8px)"}}>
            <Toolbar>
            <Typography variant="h5" fontWeight="bold" sx={{ flexGrow: 1 }}>Apoorva Dixit</Typography>
            {isMobile ? (
                <>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>

                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                    <Button sx={{mx:2}}
                    onClick={()=>{
                        navigate("/")
                        setOpen(false);}}>
                        Home
                    </Button>
                    <Button sx={{mx:2}}
                    onClick={()=>{
                        navigate("/experience")
                        setOpen(false);}}>
                        Experience
                    </Button>
                    <Button sx={{mx:2}}
                    onClick={()=>{navigate("/projects")
                                  setOpen(false);
                    }}>
                        Projects
                    </Button>
                    <Button sx={{mx:2}}
                    onClick={()=>{navigate("/skills")
                                  setOpen(false);
            }}>
                        Skills
                    </Button>
                    <Button sx={{mx:2}}
            onClick={()=>{navigate("/contact")
                setOpen(false);
            }}>
                        Contact
                    </Button>
                </Drawer>
                </>
            ):(
                <>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/")}>
                        Home
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/experience")}>
                        Experience
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/projects")}>
                        Projects
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/skills")}>
                        Skills
                    </Button>
                    <Button color="inherit" variant="contained" sx={{mx:2}}
                    onClick={()=>navigate("/contact")}>
                        Contact
                    </Button>
                </>
            )}
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;