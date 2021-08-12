import React, {useState, useEffect} from "react";
import {BASE_URL, API_KEY} from './constants/index';
import "./App.css";
import axios from 'axios';
import Title from './Title'
import ImageOfTheDay from './ImageOfTheDay'
import { tsPropertySignature } from "@babel/types";
import { props } from "bluebird";

function App() {

  const [nasaData, setData] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res=> {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
        setError('Sorry, try again soon!')
      })
  }, [])
  
  return (
    <div className="App">
      <Title title={nasaData.title}/>
      <ImageOfTheDay image={nasaData.hdurl} />
    </div>
  );
}

export default App;