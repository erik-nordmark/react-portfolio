import * as React from "react";
import './Project.scss';

export interface ProjectProps {
    image: string;
}

export class Project extends React.Component<ProjectProps, {}> {
    render() {
        return (
            <div className="round">
                <img src={String(this.props.image)}></img>
            </div>
        );
    }
}