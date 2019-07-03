import * as React from "react";
import './Cv.scss';

import { Assignment } from "../Assignment/Assignment"
import { Resume } from "../Resume/Resume";
import { projects, IProject } from '../../assets/data/projects';

export class Cv extends Resume {

    render() {

        const projectsToShow = projects.filter(project => project.resume);

        return (
            <section className="resume full">
                <div className="resume">
                    <h1>Erik Nordmark</h1>
                    <div className="contact-container">
                        <h3>Mobile</h3><h4>0046 (0)702 144 451</h4>
                    </div>
                    <div className="contact-container">
                        <h3>Email</h3><h4><a target="_blank" href="mailto:me@eriknordmark.com" title="My Email">e.n.nordmark@gmail.com</a></h4>
                    </div>
                    <div className="resume header">
                        <div className="objective">
                        I am an outgoing and positive guy with several years of working experience. With extensive practical knowledge and work experience in, especially with UI / UX design, I want to distinguish myself as a developer through hard work, perseverance and dedication. And perform tasks with efficiency and professionalism.
                        </div>
                        <div className="me"></div>
                    </div> 
                </div>

                <h2>Education</h2>
                <Assignment
                    company="Chalmers School of Technology"
                    start="Q3 2013"
                    end="Q2 2016"
                    position="Information Technology"
                    location="Gothenburg, SWEDEN"
                    text=""
                    />

                <Assignment
                    company="Chalmers School of Technology"
                    start="Q3 2012"
                    end="Q2 2013"
                    position="Technical Introductory course"
                    location="Gothenburg, SWEDEN"
                    text=""
                    />
                
                <h2>Resumé</h2>
                { projectsToShow.map(project => {
                    return <Assignment
                    company={project.name}
                    start={project.start}
                    end={project.end}
                    position={project.type}
                    location={project.location}
                    text={project.text}
                    tags={project.tags}
                    />
                })
                }
                
                <h5 className="references">References available on request</h5>
            </section>
        );
    }
}