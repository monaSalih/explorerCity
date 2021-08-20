import React from 'react'
import { Card,Row } from 'react-bootstrap'
class Weather extends React.Component {
    render() {
        return (
            <div>
               <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
 <Row xs={6} md={1}>
     {this.props.weatherData.map(item=>{

        return( 
            <Card.Text>
       today date={item.date}
                 Description={item.description} 
                 low tempreture={item.LowTemp}
                 high tempreture={item.highTemp}

    </Card.Text>
    
    )
   })
    
   }</Row>
  </Card.Body>
</Card>
                
            </div>
        )
    }
}

export default Weather
