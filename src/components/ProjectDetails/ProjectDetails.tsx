import * as Ionicons from 'react-icons/io'
import * as React from "react";
import { Helmet } from "react-helmet";
import './ProjectDetails.scss';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import { IProject } from '../../interfaces/iProject';

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
    static contextTypes = {
        router: () => true
    }

    componentDidMount() {
        ReactGA.pageview('/' + this.props.project.name);

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

    // TODO extract to untils
    listTags() {
        if (this.props.project.tags.length > 0) {
            return this.props.project.tags.map(function (tag, i) {
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
                <Helmet>
                    <meta name="description" content={this.props.project.text} />
                    <meta name="keywords" content={this.props.project.name + "," + this.props.project.tags.map(tag => tag).join(",")} />
                    <title>Erik Nordmark - {this.props.project.name}</title>
                </Helmet>
                <Link to="" onClick={this.context.router.history.goBack} className="close-project-details" style={{ opacity: this.props.open ? 1 : 0.5 }}><Ionicons.IoIosClose /></Link>             
                <div className="left-side">
                    <img src={String(this.props.project.images[0].fields.file.url)} className={this.props.open ? this.props.leftAnimation : ''} alt={String(this.props.project.name)}></img>
                </div>
                <div className="right-side">
                    <div className={"text-wrapper " + (this.props.open ? this.props.rightAnimation : '')}>
                        <h2>{this.props.project.name}</h2>
                        <div className="specs">
                            <h3 className="year">{this.props.project.year.getFullYear()}</h3>
                            <h3 className="type">{this.props.project.type}</h3>
                        </div>
                        <p>{this.props.project.text}</p>
                        <ul className="tags-list">
                            {this.listTags()}
                        </ul>
                        {this.props.project.link &&
                        <div className="visit">
                            <div className="divider"></div>
                            <a target="_blank" href={this.props.project.link}><button>VISIT</button></a>
                        </div> 
                        }    
                    </div>
                </div>
            </div>
        );
    }
}