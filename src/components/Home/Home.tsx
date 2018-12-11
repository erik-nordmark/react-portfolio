import * as React from "react";
import { Header } from '../Header/Header';
import { Splash } from '../Splash/Splash';
import { ProjectGrid } from '../ProjectGrid/ProjectGrid';
import { Resume } from '../Resume/Resume';
import { Footer } from '../Footer/Footer';
import './Home.scss'

export class Home extends React.Component<{}, {}> {
render() {
    return (
        <div className="Home">
          <Header firstName="erik" lastName="nordmark" />
          <Splash quote="Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." author="Antoine de Saint-Exupéry" />
          <ProjectGrid />
          <Resume />
          <Footer text="this is a footer" />
        </div>
    );
  }
}
