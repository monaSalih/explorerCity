import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card  from 'react-bootstrap/Card';
// import { CardImg } from 'react-bootstrap';

//////////////////////test github

 class Movie extends React.Component {

    render() {
      
        return (
            <div>
              
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"src={this.props.resultImg}  />
  <Card.Body>
    <Card.Title>Movie Title: {this.props.titleResul}</Card.Title>
    <Card.Text>
{console.log(this.props)}
  {/* <CardImg /> */}
  {console.log(this.props.resultImg)}
  {this.props.resultStore.map(item=>{
return( 
  <Card.Text>
  resultImg={item.movImage}

  <Card.Img variant="top" src={item.moviePoster} />
</Card.Text>
)
          
             })
             }
             
    
    </Card.Text>
    
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default Movie
