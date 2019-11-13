import * as React from "react";
import './Header.scss';
import { Link } from "react-router-dom";

const logo = require("../../assets/images/logo/logo_white_no_text.png");

export interface HeaderProps { 
    firstName: string; 
    lastName: string;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
        <header>
            <img src={logo} alt="Nordev Logo"/>
            <Link to="/"><h1 title="erik nordmark"><b>{this.props.firstName}</b>{this.props.lastName}</h1></Link>
            <div className="arrow-down"></div>
        </header>);
    }
}