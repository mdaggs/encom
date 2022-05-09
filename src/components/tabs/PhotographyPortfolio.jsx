import React from 'react'
import { Card, CardMedia, Grid, Typography, CardContent, Container } from '@mui/material'
import airport from './img/photography/airport.jpeg'
import bitter from './img/photography/bitter.jpeg'
import skilift from './img/photography/skilift.jpeg'
import blue1 from './img/photography/blue1.jpeg'
import bronx from './img/photography/bronx.jpeg'
import snowie from './img/photography/snowie.jpeg'
import tulsaremote from './img/photography/tulsaremote.jpeg'

export default function PhotographyPortfolio() {
    const data = [
      {id: 1, image: airport, heading: "Overcast Airport"},
      {id: 2, image: bitter, heading: "Bitter.com"},
      {id: 3, image: skilift, heading: "Kirkwood California"},
      {id: 4, image: blue1, heading: "Pondering Chi"},
      {id: 5, image: bronx, heading: "Bronx"},
      {id: 6, image: snowie, heading: "Snowie"},
      {id: 7, image: tulsaremote, heading: "Remote Work"}
    ]

    return (
      <Container>
        <Grid container spacing={1} direction="row">
          {
            data.map((payload) => {
              return (
                <>
                  <Grid item xs={8}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image={payload.image}
                        alt="test"
                      />
                    </Card>
                  </Grid>

                  <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {payload.heading}    
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        By: Matthew Daggs
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </>
              )
            })
          }
        </Grid>
      </Container>
  )
}
