import React from 'react'
import { Container,Card, CardMedia, Grid, Typography, Button, CardContent, CardActions } from '@mui/material'
import carlot from './img/sample-car-lot-1.png'
import restaurant from './img/sample-restaurant-1.png'
import whatsappclone from './img/whatsappclone-main.png'

export default function CodePortfolio() {
  const data = [
    {id: 1, image: carlot, heading: "Sample-Car-Lot Web Application", description: "This is a sample car lot, meant to display a dealerships inventory"},
    {id: 2, image: restaurant, heading: "Sample-Restaurant Web Application", description: "This is a sample restaurant website, used to display a stores menu and order"},
    {id: 3, image: whatsappclone, heading: "Whats App Clone", description: "A WebRTC Chat Application"}
  ]
  return (
    <Container>
         <Grid container spacing={2}>
        {
          data.map((payload) => {
            return (
              <Grid item xs={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={payload.image}
                    alt={payload.heading}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {payload.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {payload.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Get in Touch!</Button>
                    <Button size="small">Specs</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}

