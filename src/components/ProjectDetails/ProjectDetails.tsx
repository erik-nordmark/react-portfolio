import * as Ionicons from 'react-icons/io'
import * as React from "react";
import './ProjectDetails.scss';
import { Router, Link } from 'react-router-dom';
import { IProject } from '../../assets/data/projects';

export enum Direction {
    Up = 'fade-up',
    Down = 'fade-down',
    Left = 'fade-left',
    Right = 'fade-right',
}

export enum Placement {
    Left = 1,
    Right = 2,
}

interface ProjectDetailsProps {
    open: boolean,
    leftAnimation: Direction;
    rightAnimation: Direction;
    project: IProject;
}

interface ProjectDetailsState {
    open: boolean
    project: IProject
}

export class ProjectDetails extends React.Component<ProjectDetailsProps, ProjectDetailsState> {
    targetElement: any = null;

    componentDidMount() {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";

        document.body.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto"
        document.body.style.height = "auto";
    }

    listTags() {
        if (this.props.project.tags.length > 0) {
            return this.props.project.tags.map(function (tag, i) {
                console.log(tag);
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
            <div className="project-details">
                <Link to="/" className="close-project-details" style={{ opacity: this.props.open ? 1 : 0.5 }}><Ionicons.IoIosClose /></Link>
                <div className="left-side">
                    <img src={String(this.props.project.image)} className={this.props.open ? this.props.leftAnimation : ''}></img>
                </div>
                <div className="right-side">
                    <div className={"text-wrapper " + (this.props.open ? this.props.rightAnimation : '')}>
                        <h2>{this.props.project.name}</h2>
                        <div className="specs">
                            <h3 className="year">{this.props.project.year}</h3>
                            <h3 className="type">{this.props.project.type}</h3>
                        </div>
                        <p>{this.props.project.text}</p>
                        <ul className="tags-list">
                            {this.listTags()}
                        </ul>
                        <div className="visit">
                            <div className="divider"></div>
                            <button>VISIT</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}