import * as Ionicons from 'react-icons/io'
import * as React from "react";
import './Project-details.scss';

const stena = require("../../assets/images/stena_details.png");


interface ProjectDetailsState {
    open: boolean
}

export class ProjectDetails extends React.Component<any, ProjectDetailsState> {

    state = { open: this.props.open}

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
                <img src={String(stena)} className={this.props.open ? 'fade-left' : ''}></img>
                <div className={"text-wrapper " + (this.props.open ? 'fade-right' : '')}>
                    <h2>Stena Recycling</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                    <div className="divider"></div>
                    <button>BUTTON</button>
                </div>         
            </div>
        );
    }
}