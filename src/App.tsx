import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.scss';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ProjectDetails, Direction } from './components/ProjectDetails/ProjectDetails';
import { Home } from './components/Home/Home';
import { projectDevies, projectStena, projectVolvo, projectOmnipar, projectClaimscheck, projectSkimNyc, projectMilestone, projectMouseophonic, projectErikNordmark, projectSwegon, projectVolvoIt } from './assets/data/projects';
import { Cv } from './components/Cv/Cv';
import { ProjectContext } from './context/project-context';
import { createClient } from 'contentful';
import { getUrl } from './lib/url';
import { IProject } from './interfaces/iProject';

export class App extends Component<{}, {projects: any[]}> {

  constructor(props: any) {
    super(props);
    ReactGA.initialize('UA-12114335-2');

    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID ? process.env.REACT_APP_SPACE_ID : "",
        accessToken: process.env.REACT_APP_ACCESS_TOKEN ? process.env.REACT_APP_ACCESS_TOKEN : ""
    });

    client.getEntries()
    .then( entries => {
        const fields = entries.items.map(entries => entries.fields as IProject);
        fields.map(field => field.year = new Date(field.year.toString()));
        return this.setState({projects: fields})
    });
  }

  setProjects(projects:any) {
    this.setState({projects})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ProjectContext.Provider value={{projects: this.state.projects, setProjects: this.setProjects}}>
            <Switch>
                <Route exact path="/" component={Home} />}/>
                { this.state.projects!.map(project => {
                      return <Route exact path={"/" + getUrl(project.name)} render={(props) => <ProjectDetails {...props} open={true} project={project} leftAnimation={Direction.Left} rightAnimation={Direction.Up} />}/>
                  })
                }
                <Route exact path="/cv" render={(props) => <Cv {...props} />}/>
            </Switch>
          </ProjectContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
