import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Form  from 'react-bootstrap/Form';
 import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button' 


 class App extends React.Component {
constructor(props){
  super(props);
  this.state={
cityInfo:{},
distanceName:'',
rendTnfo: false,
  }
}


  cityLocation=async(event)=>{
event.preventDefault();

    let form=event.target
  await this.setState({
      distanceName:event.target.countryName.value,
      // showModel: true,

    })

    console.log(this.state.distanceName);
    let locQi=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.distanceName}&format=json`
console.log(locQi);
    let resultQi=await axios.get(locQi);

    console.log(this.state.distanceName);
    form.reset();
    this.setState({
      cityInfo:resultQi.data[0],
      rendInfo:true,
    })
  }


  // handleClose
  handleClose = () => {
    this.setState({
        showModel: false
    })
}

  render() {
    return (
      <div>
        <>
        <h2>City Explorer</h2>
        {/* <button onClick={this.cityLocation}> Get city location</button> */}
        <Form onSubmit={this.cityLocation}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter City Name</Form.Label>
                        <Form.Control name="countryName" type="text" placeholder="Country Name" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
               

{/* render result in modal */}
 <Modal show={this.state.showModal} onHide={this.handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                    <p> {
                  this.state.rendTnfo && 
                  <p> 
                    {
                      this.state.distanceName
                    }
                   Lat: {
                      this.state.cityInfo
                    }/Lan
                    {
                      this.state.cityInfo
                    }

                  </p>
                }</p>
                   
                {/* new TestBranch */}
            
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.handleclose}>
                        Close
                    </Button>
                
                </Modal.Footer>
            </Modal> 
 






        </>
      </div>
    )
  }
}

export default App
