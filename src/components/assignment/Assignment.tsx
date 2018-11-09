import * as React from "react";
import './Assignment.scss';

export interface AssignmentProps {
    company: string;
    start: string;
    end: string;
    position: string;
    location: string;
    text: string;
}

export class Assignment extends React.Component<AssignmentProps, {}> {
    render() {
        return (
            <div className="assignment">
                <div className="resume-header">
                    <h3>{this.props.company}</h3><p className="divider">/</p><h4>{this.props.position}</h4><p className="location">{this.props.location}</p>
                </div>
                <p>{this.props.start} - {this.props.end}</p>
                <span>{this.props.text}</span>
            </div>
        );
    }
}