import * as React from "react";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import { Header } from '../Header/Header';
import { Splash } from '../Splash/Splash';
import { ProjectGrid } from '../ProjectGrid/ProjectGrid';
import { Resume } from '../Resume/Resume';
import { Footer } from '../Footer/Footer';
import { projects } from '../../assets/data/projects';
import './Home.scss'

export class Home extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
    ReactGA.pageview('/index');
  }
   
render() {
    return (
        <div className="Home">
          <Helmet>
            <meta name="keywords" content={"nordmark,erik nordmark,developer,gothenburg," + projects
            .map(project => project.name.toLowerCase())
            .filter((value, index, self) => self.indexOf(value) === index)
            .join(",")} />
          </Helmet>
          <Header firstName="erik" lastName="nordmark" />
          <Splash quote="Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." author="Antoine de Saint-Exupéry" />
          <ProjectGrid />
          <Resume />
          <Footer text="this is a footer" />
        </div>
    );
  }
}
