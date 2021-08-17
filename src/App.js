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
// cityMAp:
distanceName:'',
rendTnfo: false,
cityMap:false,
showError:false,
mapImage:'',/////

weatherState:[],
/////for API
// contrName:'',
// contArr:{}
  }
}


  cityLocation=async(event)=>{
event.preventDefault();
try
{ 
    let form=event.target
  await this.setState({
      distanceName:event.target.countryName.value,
      // showModel: true,

    })
  

    console.log(this.state.distanceName);
console.log(process.env.REACT_APP_CITY_KEY,"process.env.REACT_APP_CITY_KEY");
    let locQi=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.distanceName}&format=json`;
   
    
    let locMap=`${process.env.REACT_APP_SATIC_PORT}wetherCast?info=${this.state.distanceName.toLowerCase()}`
    console.log(locQi,locMap,'locQi,locMap result');
 let resultQi=await axios.get(locQi);

     let locMapResult=await axios.get(locMap);
     console.log(locMapResult.data);
     console.log("hello");
    // console.log(this.state.distanceName);
    // form.reset();
  await  this.setState({
      cityInfo:resultQi.data[0],
      weatherState:locMapResult.data,


      rendInfo:true,
      cityMap:true, 
      mapImage:locMapResult.config.url
      
    })
    console.log();
console.log(this.state.cityInfo,"cityInfo result");
    // console.log(locMapResult.data,'locMapResult.data,');
    // console.log(this.state.mapImage,'this.state.mapImage result');
    // console.log(this.state.weatherState,'this.state.weatherState result');

    // console.log(this.state.cityInfo,'this.state.cityInfo');
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
City /Lan: {this.state.cityInfo.lon}

<Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${ this.state.cityInfo.lat},${this.state.cityInfo.lan}`}/>
 </p>
}
{/* weather state */}
{
  this.state.rendInfo &&
  <p>
 City name : {this.state.distanceName}
 City Lat: { this.state.cityInfo.lat}
 City /Lan: {this.state.cityInfo.lon}
  </p>
}
{/* error message */}
{this.state.cityMap &&
this.state.weatherState.data.map((item)=>{
  return(
    <>
    today date:{item.valid_date}
    maximume tepmresure:{item.app_max_temp}
   minemue tepmresure:{item.app_min_temp}
    </>
  )
})

}
{/* alt={`${this.state.distanceName}`}    */}
                 
       </>
      </div>
    )
  }
}

export default App



////REACT_APP_CITY_KEY=pk.38fd60b4e436a13e7dbbd2ed457853d7