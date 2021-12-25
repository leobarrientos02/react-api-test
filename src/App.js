import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  //const api = '1752809048248298';
  const [zoo, setZoo] = useState(null);
  useEffect( () => {
    axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then( data => {
      console.log(data.data);
      setZoo(data.data);
    })
    .catch( err => console.log(err))
  },[]);
  return (
    <div className="App">
      { zoo && (
        <div className="container">
          <h1>{ zoo.name }</h1>
          <div className="animal">
            <div className="image">
              <img src={zoo.image_link} loading="lazy" alt={zoo.name} />
            </div>
            <div className="stats">
              <h2>Stats</h2>
              <p>Latin Name: { zoo.latin_name }</p>
              <p>Active Time: { zoo.active_time }</p>
              <p>Animal Type: { zoo.animal_type }</p>
              <p>Diet: { zoo.diet }</p>
              <p>Geographic Range: { zoo.geo_range }</p>
              <p>Habitat: { zoo.habitat }</p>
              <p>LifeSpan: { zoo.lifespan } years</p>
              <p>Length: { zoo.length_min }ft to { zoo.length_max }ft</p>
              <p>Weight: { zoo.weight_min }lbs to { zoo.weight_max }lbs</p>
            </div>
          </div>

        </div>
      )}  
    </div>
  );
}

export default App;
