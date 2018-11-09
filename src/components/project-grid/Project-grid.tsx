import * as React from "react";
import './Project-grid.scss';
import { Project } from "../project/Project";

const stena = require("../../assets/images/stena.png");
const volvo = require("../../assets/images/volvo.png");
const virtualShelf = require("../../assets/images/virtual-shelf.png");
const milestone = require("../../assets/images/milestone.png");
const mouseophonic = require("../../assets/images/mouseophonic.png");
const omnipar = require("../../assets/images/omnipar.png");
const claimscheck = require("../../assets/images/claimscheck.png");
const n = require("../../assets/images/n.png");
const eriknordmark = require("../../assets/images/eriknordmark.png");

export interface ProjectGridProps {
}

export class ProjectGrid extends React.Component<ProjectGridProps, {}> {
    render() {
        return (
            <section className="projects">
                <h2>Projects</h2>
                <Project image={stena} />
                <Project image={volvo} />
                <Project image={virtualShelf} />
                <Project image={milestone} />
                <Project image={mouseophonic} />
                <Project image={omnipar} />
                <Project image={claimscheck} />
                <Project image={n} />
                <Project image={eriknordmark} />
            </section>
        );
    }
}