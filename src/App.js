import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import Movie from './Component/Movie';
import Weather from './Component/Weather';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInfo: {},
      // cityMAp:
      distanceName: '',
      rendTnfo: false,
      cityMap: false,
      showError: false,
      mapImage: '',/////
      ////////weather result
      weatherState: [],
      /////movie result
      movieName: '',
      movieInfoArray: []
    }
  }


  cityLocation = async (event) => {
    event.preventDefault();
    try {
      // let form=event.target
 await this.setState({
        distanceName: event.target.countryName.value,
        // showModel: true,

      })


      // console.log(this.state.distanceName);
      // console.log(process.env.REACT_APP_CITY_KEY, "process.env.REACT_APP_CITY_KEY");
      /////////////////locationIQ
      let locQi = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.distanceName}&format=json`;

      /////////////////locationMAP 
      let locMap = `${process.env.REACT_APP_SATIC_PORT}wetherCast?info=${this.state.distanceName.toLowerCase()}`
      // console.log(locQi, locMap, 'locQi,locMap result');

      /////////////////locationMOVIE
      let locMovie = `${process.env.REACT_APP_SATIC_PORT}movies?queryCity=${this.state.distanceName}`

      let resultQi = await axios.get(locQi);

      let locMapResult = await axios.get(locMap);

      let movieLocResult=await axios.get(locMovie)
      // console.log(locMapResult.data);
      // console.log("hello");
      // console.log(this.state.distanceName);
      // form.reset();
      await this.setState({
        cityInfo: resultQi.data[0],
        weatherState: locMapResult.data,
        rendInfo: true,
        cityMap: true,
        mapImage: locMapResult.config.url,
        movieInfoArray: movieLocResult.data

      })
      // console.log();
      console.log(resultQi.data, "resultQi result");
     
    } catch {
      this.setState({
        showError: true
      })
    }
  };



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
              City Lat: {this.state.cityInfo.lat}
              City /Lan: {this.state.cityInfo.lon}

              <Image style={{ width: "140px", height: "120px" }} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=16`} />
            </p>
          }
          {/* weather state */}
          {
            this.state.rendInfo &&
            <p>
              City name : {this.state.distanceName}

            </p>
          }
          {/* error message */}
          {this.state.cityMap &&


            <>
           
             
         <Weather
                weatherData={this.state.weatherState}
          
             

/>
             

             
             
               <Movie   resultStore={this.state.movieInfoArray}/>

            </>


          }



        </>
      </div>
    )
  }
}

export default App




/////////////test finish