import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <Container>
      <Grid spacing={2}>
        <Paper variant="outlined" center>
          <Typography>Encom.com</Typography>
        </Paper>
        <Paper variant="outlined" square>
          < Typography>
            Here at Encom, we pride ourselves in making mobile first websites that have the ability to showcase
            any product your company needs to advertise in any layout you choose. Please visit the Code Portfolio
            to view examples of template websites. 
          </Typography>
        </Paper>

        </Grid>
      </Container>
  )
}
