import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "./constants/index";
import "./App.css";
import axios from "axios";
import Title from "./Title";
import ImageOfTheDay from "./ImageOfTheDay";
import Date from "./Date";
import Explanation from "./Explanation";
import Copyright from "./Copyright";

function App() {
  const [nasaData, setNasaData] = useState({});
  const [error, setError] = useState(""); //can be an empty string.

  useEffect(() => {
    axios
      .get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then((res) => {
        // console.log('Or do I happen first?')
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Sorry, try again soon!");
      });
  }, []);

  return (
    //do we want these rendered to the DOM? do they each need separate divs?
    <div className="App">
      {/*console.log('Do I happen first?')*/}
      {/*first loads (happens first) and nasaData does not have any data yet. components then render */}
      {error && <h1>{error}</h1>}
      {/*{error ? <h1>{error}</h1> : null}*/}
      <Title title={nasaData.title} />
      <Date date={nasaData.date} />
      <ImageOfTheDay image={nasaData.url} />
      <Explanation explanation={nasaData.explanation} />
      <Copyright copyright={nasaData.copyright} error={error} />
    </div>
  );
}

export default App;
