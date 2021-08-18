import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card  from 'react-bootstrap/Card';
import { CardImg } from 'react-bootstrap';


 class Movie extends React.Component {

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"src={this.props.resultImg}  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
{console.log(this.props)}
  {/* <CardImg /> */}

     Movie Title: {this.props.titleResul}
    </Card.Text>
    
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default Movie
