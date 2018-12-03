import * as Ionicons from 'react-icons/io'
import * as React from "react";
import './ProjectDetails.scss';
import { IProject } from '../ProjectGrid/ProjectGrid';

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
    handler: any,
    leftAnimation: Direction;
    rightAnimation: Direction;
    project: IProject;
    contentPlacement: Placement
}

interface ProjectDetailsState {
    open: boolean
    project: IProject
}

export class ProjectDetails extends React.Component<ProjectDetailsProps, ProjectDetailsState> {


    state = { open: this.props.open, project: this.props.project}

    constructor(props:any, state: any) {
        super(props, state);
    }

    componentDidUpdate() {
        if (this.props.open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }

    render() {
        return (
            <div className="project-details" style={{opacity: this.props.open ? 1 : 0, visibility: this.props.open ? 'visible' : 'hidden'}}>
                <div className="close-project-details" style={{opacity: this.props.open ? 1 : 0.5}} onClick = {this.props.handler} ><Ionicons.IoIosClose /></div>
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
                        <div className="divider"></div>
                        <button>VISIT</button>
                    </div>         
                </div>  
            </div>
        );
    }
}