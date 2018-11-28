import * as React from "react";
import './Resume.scss';

import { Assignment } from "../Assignment/Assignment"

export interface ResumeProps {
}

export class Resume extends React.Component<ResumeProps, {}> {
    render() {
        return (
            <section className="resume">
                <h2>Resumé</h2>
                <Assignment
                    company="Stena"
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
                    text="I continued to work on the Virtual Shelf back in Gothenburg, where I was a part of SKIM's new Sweden office."
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
                    />
            </section>
        );
    }
}