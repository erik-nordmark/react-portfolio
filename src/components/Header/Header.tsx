import * as React from "react";
import './Header.scss';
import { Link } from "react-router-dom";

export interface HeaderProps { 
    firstName: string; 
    lastName: string;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
        <header>
            <Link to="/"><h1 title="erik nordmark"><i>{this.props.firstName}</i>{this.props.lastName}</h1></Link>
            <div className="arrow-down"></div>
        </header>);
    }
}