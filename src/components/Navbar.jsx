import { AppBar, CssBaseline, Toolbar, Typography, Link, Button } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Navbar() {
  return (
    <React.Fragment>
        <CssBaseline />
        <AppBar
            position="static"
            elevation={5}
            color="default"
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar
                sx={{ flexWrap: 'wrap' }}
            >
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap sx={{ flexGrow: 1 }}
                >
                    ENCOM
                </Typography>
                <Link
                    href="https://github.com/mdaggs/encom"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<GitHubIcon />}
                    >
                        Github
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}
