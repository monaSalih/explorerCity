import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Form  from 'react-bootstrap/Form';
 import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button' 


 class App extends React.Component {
constructor(props){
  super(props);
  this.state={
cityInfo:{},
distanceName:'',
rendTnfo: false,
cityMap:false,
showError:false,
mapImage:''
/////for API
// contrName:'',
// contArr:{}
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
    let locMap=`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${ this.state.cityInfo.lat},${this.state.cityInfo.lan}`
    console.log(locQi);
try
   { let resultQi=await axios.get(locQi);


    console.log(this.state.distanceName);
    form.reset();
    this.setState({
      cityInfo:resultQi.data[0],
      rendInfo:true,
      cityMap:true, 
      mapImage:locMap
      
    })
  } catch{
      this.setState({
        showError:true
      })
  }
  };
  
  


  // handleClose
//   handleClose = () => {
//     this.setState({
//         showModel: false
//     })
// }

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
   
 {this.state.rendInfo &&
 <p>
City name : {this.state.distanceName}
City Lat: { this.state.cityInfo.lat}
City /Lan: {this.state.cityInfo.lan}
 </p>
}
{this.state.cityMap &&
<p>
  <Image 
          src={this.state.mapImage} />
  </p>}
{this.state.showError && 
<p>someThing faild please try again
  
</p>

}
{/* alt={`${this.state.distanceName}`}    */}
                 
       </>
      </div>
    )
  }
}

export default App
