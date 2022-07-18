import React from "react";
import Button from '@mui/material/Button';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from "@mui/material";
// import { BsGithub } from "react-icons/bs";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";


import "../assets/style/heading.css"

function Heading(){
    return(
        <header>
        <Grid container spacing={1}>
            <Grid item xs={9}>
                <h1 className="heading">Keeper</h1>
            </Grid>
            <Grid item xs={3}>
                <Button className="githubButton" href="https://github.com/muazaqdas/note-keeper-app" variant="outlined" target="_blank">
                    <CgGitFork style={{ fontSize: "1.7em" }} />{" "}
                    <AiFillStar style={{ fontSize: "1.6em" }} />
                </Button>
            </Grid>
        </Grid>
        </header>
    
    )   
}

export default Heading;