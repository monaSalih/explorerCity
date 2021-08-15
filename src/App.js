import React from 'react'
import axios from 'axios'

 class App extends React.Component {
  cityLocation=()=>{
    let locUrl='https://eu1.locationiq.com/v1/search.php?key=pk.78f49f3aca0af1e3c2fb3a2a0b800fe0&q=amman&format=json'

    let showCity=axios.get(locUrl)
    console.log(showCity);
    
  }
  render() {
    return (
      <div>
        <>
        <h2>City Explorer</h2>
        <button onClick={this.cityLocation}> Get city location</button>
        </>
      </div>
    )
  }
}

export default App
