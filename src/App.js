import React from 'react';
import HomeScreen from "./HomeScreen";
import { Helmet } from 'react-helmet';
import titleImage from "./images/P.png"


import './App.css';

function App() {
  return (
    <>
    <Helmet>
      <title>Prashant Parashar</title>
      <link rel="icon" href={titleImage} />
      <meta name="Prashant Parashar"
             content=" Prashant Parashar portfolio website sirparashar sirparashar portfolio website linkdin sirparashar parashar webdeveloper "   
                />
    </Helmet>
    <div className="App">
      <HomeScreen />
    </div>
    </>
  );
}

export default App;
