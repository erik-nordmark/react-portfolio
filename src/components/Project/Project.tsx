import * as React from "react";
import './Project.scss';

export class Project extends React.Component<any, {}> {

    render() {
        return (
            <div className="round" onClick={this.props.onClick}>
                <img src={String(this.props.image)}></img>
            </div>
        );
    }
}