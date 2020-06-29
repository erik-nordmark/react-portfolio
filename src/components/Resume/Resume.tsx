import * as React from "react";
import './Resume.scss';

import { Assignment } from "../Assignment/Assignment"
import { Button } from "../Button/Button";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ProjectContext } from '../../context/project-context';


interface ResumeState {
    projects: any[];
}

export function Resume() {

    const { projects } = React.useContext(ProjectContext);

    return (
        <section className="resume">
            {/* <h2>Resumé</h2> */}

            <SectionHeader text="Resumé" />

            { projects!
            .filter(project => project.resume)
            .map(project => {
                return <Assignment
                company={project.name}
                start={project.start}
                end={project.end}
                position={project.type}
                location={project.location}
                text={project.text}
                employmentType={project.employmentType}
                />
            })
            }

            <Button width="400px" height="60px" text="Full Resumé" url="/cv" />

        </section>
    );
}