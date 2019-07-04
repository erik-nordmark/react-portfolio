import * as React from "react";
import './Assignment.scss';

export interface AssignmentProps {
    company: string;
    start: string;
    end: string;
    position: string;
    location: string;
    text: string;
    tags?: string[];
}

export class Assignment extends React.Component<AssignmentProps, {}> {
    
    listTags() {
        if (this.props.tags && this.props.tags.length > 0) {
            return this.props.tags
            .sort()
            .map(function (tag, i) {
                switch (tag) {
                    case 'angular':
                    return <li key={i} id="angular">{tag}</li>;
                    
                    case 'android':
                    return <li key={i} id="android">{tag}</li>;

                    case 'html':
                    return <li key={i} id="html">{tag}</li>;

                    case 'css':
                    return <li key={i} id="css">{tag}</li>;

                    case 'photoshop':
                    return <li key={i} id="photoshop">{tag}</li>;
                    
                    case 'react':
                    return <li key={i} id="react">{tag}</li>;

                    case 'mongodb':
                    return <li key={i} id="mongodb">{tag}</li>;

                    case 'node':
                    return <li key={i} id="node">{tag}</li>;

                    case 'java':
                    return <li key={i} id="java">{tag}</li>;

                    case 'kotlin':
                    return <li key={i} id="kotlin">{tag}</li>;

                    case 'aws':
                    return <li key={i} id="aws">{tag}</li>;

                    default:
                    return <li key={i}>{tag}</li>;
                }
            })
        } else {
            return (<li></li>)
        }
    }

    render() {
        return (
            <div className="assignment">
                <div className="resume-header">
                    <h3>{this.props.company}</h3><p className="divider">/</p><h4>{this.props.position}</h4>
                    <p className="location">{this.props.location}</p>
                </div>
                <p>{this.props.start} - {this.props.end}</p>
                <span>{this.props.text}</span>
                { this.props.tags &&
                    <ul className="tags-list">
                        {this.listTags()}
                    </ul>
                }
            </div>
        );
    }
}