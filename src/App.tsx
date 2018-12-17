import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ProjectDetails, Direction } from './components/ProjectDetails/ProjectDetails';
import { Home } from './components/Home/Home';
import { projectStena, projectVolvo, projectOmnipar, projectClaimscheck, projectSkim, projectMilestone, projectMouseophonic, projectErikNordmark } from './assets/data/projects';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
              <Route exact path="/" component={Home} />}/>
              <Route exact path="/stena" render={(props) => <ProjectDetails {...props} open={true} project={projectStena} leftAnimation={Direction.Down} rightAnimation={Direction.Right} />}/>
              <Route path="/volvo" render={(props) => <ProjectDetails {...props} open={true} project={projectVolvo} leftAnimation={Direction.Left} rightAnimation={Direction.Up} />}/>
              <Route path="/omnipar" render={(props) => <ProjectDetails {...props} open={true} project={projectOmnipar} leftAnimation={Direction.Down} rightAnimation={Direction.Up} />}/>
              <Route path="/claims-check" render={(props) => <ProjectDetails {...props} open={true} project={projectClaimscheck} leftAnimation={Direction.Left} rightAnimation={Direction.Right} />}/>
              <Route path="/virtual-shelf" render={(props) => <ProjectDetails {...props} open={true} project={projectSkim} leftAnimation={Direction.Left} rightAnimation={Direction.Up} />}/>
              <Route path="/milestone" render={(props) => <ProjectDetails {...props} open={true} project={projectMilestone} leftAnimation={Direction.Down} rightAnimation={Direction.Right} />}/>
              <Route path="/mouseophonic" render={(props) => <ProjectDetails {...props} open={true} project={projectMouseophonic} leftAnimation={Direction.Down} rightAnimation={Direction.Up} />}/>
              <Route path="/eriknordmark" render={(props) => <ProjectDetails {...props} open={true} project={projectErikNordmark} leftAnimation={Direction.Left} rightAnimation={Direction.Right} />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
