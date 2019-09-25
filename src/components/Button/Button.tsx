import * as React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
    width: string;
    height: string;
    text: string;
    url: string;
}

export class Button extends React.Component<ButtonProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="button-container" >
                <Link to={this.props.url}>
                    <div 
                        style={{ width: this.props.width, height: this.props.height}}
                        className="button" >
                        {this.props.text}
                    </div>
                </Link>
            </div>
        );
    }
}
