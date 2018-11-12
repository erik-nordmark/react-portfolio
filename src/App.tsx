import React, { Component } from 'react';
import './App.scss';

import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { ProjectGrid } from "./components/project-grid/Project-grid";
import { Resume } from "./components/resume/Resume";
import { Splash } from "./components/splash/Splash";

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
