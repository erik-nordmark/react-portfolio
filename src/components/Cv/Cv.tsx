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
                    position="Techical Introductory course"
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
                {/* <Assignment
                    company="Swegon"
                    start="Q1 2019"
                    end=""
                    position="Fullstack developer"
                    location="Gothenburg, SWEDEN"
                    text="Swegon is the market leader in energy-efficient ventilation and indoor climate systems. The business comprises five different business areas and has 2,200 employees in Europe, North America, and Asia. I had two separate assignments at Swegon. One was to develop a new and faster print service in C # and Razor. The service takes Json data and converts this data into an html preview and a pdf file for printing. The other one is to be part of the front-end team, building new features and maintenance in their current React application."
                    />
                <Assignment
                    company="Stena Recycling"
                    start="Q2 2018"
                    end="Q4 2018"
                    position="Web developer"
                    location="Gothenburg, SWEDEN"
                    text="Stena is one of the largest family-owned corporate groups in Sweden and operates worldwide. I worked for Stena Recycling with their customer portal. The customer portal provides the user with updated information and statistics on all of its waste management.
                    My task was, above all, to improve the new user's on-boarding experience, by replacing existing applications with new ones. These new web applications were written in Angular 2+ along with TypeScript, and included welcome email, registration and login, as well as associated micro services to communicate with other parts of the system. I was also responsible for getting these new micro services tested, since this was something that was missing from the beginning."
                    />
                <Assignment
                    company="Volvo Trucks"
                    start="Q3 2017"
                    end="Q2 2018"
                    position="Android developer"
                    location="Gothenburg, SWEDEN"
                    text="At Volvo Trucks they are building the next generation of trucks. I was part of the Android development team. They are working to build the new infotainment system that is planned to be released to the public in 2020. The software foundation is mainly android, but is tightly connected with the truck specific hardware and also requires knowledge working with network configuration.
                    I did primarily work with an application that handles streams from auxiliary cameras on the network and he has taken a big part in defining how to work with dependency injection together with Dagger."
                    />
                <Assignment
                    company="SKIM Analytics"
                    start="Q2 2017"
                    end="Q3 2017"
                    position="Web developer"
                    location="Gothenburg, SWEDEN"
                    text="I continued to work on the Virtual Shelf back in Gothenburg, where I was a part of SKIM's first office in Sweden."
                    />
                <Assignment
                    company="SKIM Analytics"
                    start="Q2 2016"
                    end="Q2 2017"
                    position="Web developer"
                    location="New York, USA"
                    text="SKIM is research heavyweights specialized in customer decision behavior, bridging the rational and emotional.
                    SKIM virtual shelf displays test products in a competitive environment, on a digital retail shelf, replicating
                    the consumer’s in-store purchase situation. At SKIM, virtual shelves are utilized in Choice-Based Conjoint
                    type of studies, often related to consumer goods portfolio pricing strategies. The power is in closely
                    replicating a retail shelf, while at the same time maximizing the flexibility to influence different aspects of
                    shelf design and measure their impact on consumer choice behavior. I built this system from the
                    ground up, working with the complete web stack, with everything from setting up the database to creating the design."
                    /> */}

                    <h5 className="references">References available on request</h5>
            </section>
        );
    }
}