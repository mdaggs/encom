import React, { useState } from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'
import airport from './img/photography/airport.jpeg'
import bitter from './img/photography/bitter.jpeg'
import skilift from './img/photography/skilift.jpeg'
import blue1 from './img/photography/blue1.jpeg'
import bronx from './img/photography/bronx.jpeg'
import snowie from './img/photography/snowie.jpeg'
import tulsaremote from './img/photography/tulsaremote.jpeg'

export default function TestContent3() {

    const data = [
      {id: 1, position: "row", image: airport},
      {id: 2, position: "row-reverse", mage: bitter},
      {id: 3, position: "row", image: skilift},
      {id: 4, position: "row-reverse", image: blue1},
      {id: 5, position: "row", image: bronx},
      {id: 6, position: "row-reverse", image: snowie},
      {id: 7, position: "row", image: tulsaremote}
    ]

    const [steps, setSteps] = useState(0);
    const [row, setRow] = useState(true)

    function increment() {
      setSteps(prevState => prevState + 1);
      oddOrEven(steps)
    }

    function oddOrEven(number) {
      //check if the number is even
      if(number % 2 == 0) {
        console.log("The number is even.");
        setRow(false)
        console.log(number)
        console.log(row)
      }

      // if the number is odd
      else {
        console.log("The number is odd.");
        setRow(true)
        console.log(number)
        console.log(row)
      }
    }

    
    return (
      <Container>
          {data.map((payload) => {
            return (
                <Grid container spacing={2} direction={payload.position}>
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
              </Grid>
            )
          })}
      </Container>
  )
}
