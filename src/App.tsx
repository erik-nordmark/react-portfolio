import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.scss';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ProjectDetails, Direction } from './components/ProjectDetails/ProjectDetails';
import { Home } from './components/Home/Home';
import { projectDevies, projectStena, projectVolvo, projectOmnipar, projectClaimscheck, projectSkimNyc, projectMilestone, projectMouseophonic, projectErikNordmark, projectSwegon, projectVolvo2 } from './assets/data/projects';
import { Cv } from './components/Cv/Cv';

export class App extends Component {

  constructor(props: any) {
    super(props);
    ReactGA.initialize('UA-12114335-2');
   }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
              <Route exact path="/" component={Home} />}/>
              <Route exact path="/volvo2" render={(props) => <ProjectDetails {...props} open={true} project={projectVolvo2} leftAnimation={Direction.Left} rightAnimation={Direction.Up} />}/>
              <Route exact path="/swegon" render={(props) => <ProjectDetails {...props} open={true} project={projectSwegon} leftAnimation={Direction.Down} rightAnimation={Direction.Up} />}/>
              <Route exact path="/devies" render={(props) => <ProjectDetails {...props} open={true} project={projectDevies} leftAnimation={Direction.Left} rightAnimation={Direction.Right} />}/>
              <Route exact path="/stena" render={(props) => <ProjectDetails {...props} open={true} project={projectStena} leftAnimation={Direction.Down} rightAnimation={Direction.Right} />}/>
              <Route exact path="/volvo" render={(props) => <ProjectDetails {...props} open={true} project={projectVolvo} leftAnimation={Direction.Left} rightAnimation={Direction.Up} />}/>
              <Route exact path="/omnipar" render={(props) => <ProjectDetails {...props} open={true} project={projectOmnipar} leftAnimation={Direction.Down} rightAnimation={Direction.Up} />}/>
              <Route exact path="/claims-check" render={(props) => <ProjectDetails {...props} open={true} project={projectClaimscheck} leftAnimation={Direction.Left} rightAnimation={Direction.Right} />}/>
              <Route exact path="/virtual-shelf" render={(props) => <ProjectDetails {...props} open={true} project={projectSkimNyc} leftAnimation={Direction.Left} rightAnimation={Direction.Up} />}/>
              <Route exact path="/milestone" render={(props) => <ProjectDetails {...props} open={true} project={projectMilestone} leftAnimation={Direction.Down} rightAnimation={Direction.Right} />}/>
              <Route exact path="/mouseophonic" render={(props) => <ProjectDetails {...props} open={true} project={projectMouseophonic} leftAnimation={Direction.Down} rightAnimation={Direction.Up} />}/>
              <Route exact path="/eriknordmark" render={(props) => <ProjectDetails {...props} open={true} project={projectErikNordmark} leftAnimation={Direction.Left} rightAnimation={Direction.Right} />}/>
              <Route exact path="/cv" render={(props) => <Cv {...props} />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
