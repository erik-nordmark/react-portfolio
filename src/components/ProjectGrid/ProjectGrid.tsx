import * as React from "react";
import './ProjectGrid.scss';
import { Project } from "../Project/Project";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { SectionHeader } from "../SectionHeader/SectionHeader";

const swegon = require("../../assets/images/projects/swegon.jpg");
const devies = require("../../assets/images/projects/devies.jpg");
const stena = require("../../assets/images/projects/stena.jpg");
const volvo = require("../../assets/images/projects/volvo.jpg");
const virtualShelf = require("../../assets/images/projects/virtual-shelf.jpg");
const milestone = require("../../assets/images/projects/milestone.jpg");
const mouseophonic = require("../../assets/images/projects/mouseophonic.jpg");
const omnipar = require("../../assets/images/projects/omnipar.jpg");
const claimscheck = require("../../assets/images/projects/claimscheck.jpg");
const eriknordmark = require("../../assets/images/projects/eriknordmark.jpg");

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
                    <Link to="/volvo-it"><Project image={volvo} /></Link>
                    <Link to="/swegon"><Project image={swegon} /></Link>
                    <Link to="/devies"><Project image={devies} /></Link>
                    <Link to="/stena"><Project image={stena} /></Link>
                    <Link to="/volvo"><Project image={volvo} /></Link>
                    <Link to="/omnipar"><Project image={omnipar}/></Link>
                    <Link to="/claims-check"><Project image={claimscheck} /></Link>
                    <Link to="/virtual-shelf"><Project image={virtualShelf} /></Link>
                    <Link to="/milestone"><Project image={milestone} /></Link>
                    <Link to="/mouseophonic"><Project image={mouseophonic} /></Link>
                    <Link to="/eriknordmark"><Project image={eriknordmark} /></Link>
                    </div>
            </section>        
            );
    }
}