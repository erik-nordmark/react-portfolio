import * as React from "react";
import './ProjectGrid.scss';
import { Project } from "../Project/Project";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { SectionHeader } from "../SectionHeader/SectionHeader";

const swegon = require("../../assets/images/swegon.png");
const devies = require("../../assets/images/devies.png");
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

export class ProjectGrid extends React.Component<{}, {}> {
    
    constructor(props: any) {
        super(props);
       }

    render() {

        return (
            <section className="projects">
                {/* <h2>Projects</h2> */}
                <SectionHeader text="Projects" />
                <div className="projects-grid">
                    <Link to="/volvo2"><Project image={volvo} /></Link>
                    <Link to="/swegon"><Project image={swegon} /></Link>
                    <Link to="/devies"><Project image={devies} /></Link>
                    <Link to="/stena"><Project image={stena} /></Link>
                    <Link to="/volvo"><Project image={volvo} /></Link>
                    <Link to="/omnipar"><Project image={omnipar}/></Link>
                    <Link to="/claims-check"><Project image={claimscheck} /></Link>
                    <Link to="/virtual-shelf"><Project image={virtualShelf} /></Link>
                    <Link to="/milestone"><Project image={milestone} /></Link>
                    <Link to="/mouseophonic"><Project image={mouseophonic} /></Link>
                    {/* <Project image={n} onClick={this.handler}/> */}
                    <Link to="/eriknordmark"><Project image={eriknordmark} /></Link>
                    </div>
            </section>        
            );
    }
}