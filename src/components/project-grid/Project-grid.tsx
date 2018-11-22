import * as React from "react";
import './Project-grid.scss';
import { Project } from "../project/Project";
import { ProjectDetails } from '../project-details/Project-details';

const stena = require("../../assets/images/stena.png");
const volvo = require("../../assets/images/volvo.png");
const virtualShelf = require("../../assets/images/virtual-shelf.png");
const milestone = require("../../assets/images/milestone.png");
const mouseophonic = require("../../assets/images/mouseophonic.png");
const omnipar = require("../../assets/images/omnipar.png");
const claimscheck = require("../../assets/images/claimscheck.png");
const n = require("../../assets/images/n.png");
const eriknordmark = require("../../assets/images/eriknordmark.png");

interface ProjectGridProps {
}

interface ProjectGridState {
    open: boolean
}

export class ProjectGrid extends React.Component<ProjectGridProps, ProjectGridState> {
    
    state = {open: false}

    constructor(props: any) {
        super(props);

        this.state = {
          open: false
        };
  
        this.handler = this.handler.bind(this);
     }

     handler() {
        this.setState(state => ({
          open: !state.open
        }));
     }

    render() {

        return (
            <section className="projects">
                <h2>Projects</h2>
                <ProjectDetails handler = {this.handler} open = {this.state.open}  />
                <Project image={stena} onClick={this.handler}/>
                <Project image={volvo} onClick={this.handler}/>
                <Project image={virtualShelf} onClick={this.handler}/>
                <Project image={milestone} onClick={this.handler}/>
                <Project image={mouseophonic} onClick={this.handler}/>
                <Project image={omnipar} onClick={this.handler}/>
                <Project image={claimscheck} onClick={this.handler}/>
                <Project image={n} onClick={this.handler}/>
                <Project image={eriknordmark} onClick={this.handler}/>
            </section>
        );
    }
}