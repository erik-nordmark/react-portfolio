import React, { Component } from 'react';
import './App.scss';

import { Header } from "./components/header/header";
import { Splash } from "./components/Splash/Splash";
import { ProjectGrid } from "./components/ProjectGrid/ProjectGrid";
import { Resume } from "./components/Resume/Resume";
import { Footer } from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header firstName="erik" lastName="nordmark" />
        <Splash quote="Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." author="Antoine de Saint-Exupéry" />
        <ProjectGrid />
        <Resume />
        <Footer text="this is a footer" />
      </div>
    );
  }
}

export default App;
