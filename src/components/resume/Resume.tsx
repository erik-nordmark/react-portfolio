import * as React from "react";
import './Resume.scss';

import { Assignment } from "../Assignment/Assignment"
import { projects } from '../../assets/data/projects';
import { Button } from "../Button/Button";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export interface ResumeProps {
}

export class Resume extends React.Component<ResumeProps, {}> {
    render() {

        const projectsToShow = projects.filter(project => project.resume);

        return (
            <section className="resume">
                {/* <h2>Resumé</h2> */}

                <SectionHeader text="Resumé" />

                { projectsToShow.map(project => {
                    return <Assignment
                    company={project.name}
                    start={project.start}
                    end={project.end}
                    position={project.type}
                    location={project.location}
                    text={project.text}
                    />
                })
                }

                <Button width="400px" height="60px" text="Full Resumé" url="/cv" />

            </section>
        );
    }
}