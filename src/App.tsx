import React, { Component } from 'react';
import './App.scss';

// import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProjectGrid } from "./components/ProjectGrid/ProjectGrid";
import { Resume } from "./components/Resume/Resume";
import { Splash } from "./components/Splash/Splash";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header firstName="erik" lastName="nordmark" />
        <Splash quote="Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." author="Antoine de Saint-Exupéry" />
        <ProjectGrid />
        <Resume />
        {/* <Footer text="this is a footer" /> */}
      </div>
    );
  }
}

export default App;
