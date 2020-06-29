import * as React from "react";
import './ProjectGrid.scss';
import { Project } from "../Project/Project";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ProjectContext } from '../../context/project-context';
import { getUrl } from "../../lib/url";
import { IProject } from "../../interfaces/iProject";

interface ProjectGridState {
    projects: IProject[];
}

export function ProjectGrid() {
    const { projects } = React.useContext(ProjectContext);

    return (
        <section className="projects">
            {/* <h2>Projects</h2> */}
            <SectionHeader text="Projects" />
            <div className="projects-grid">
                { 
                projects!
                .sort( (a, b) => { return b.year.getTime() - a.year.getTime() })
                .map(project => {
                    return <Link to={ getUrl(project.name) }><Project image={project.previewImage.fields.file.url} /></Link>
                })
                }
            </div>
        </section>        
    );

}