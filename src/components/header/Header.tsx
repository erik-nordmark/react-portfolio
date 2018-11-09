import * as React from "react";
import './Header.scss';

export interface HeaderProps { 
    firstName: string; 
    lastName: string;
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
        <header>
            <h1><a href="./index.html"><i>{this.props.firstName}</i>{this.props.lastName}</a></h1>
            <div className="arrow-down"></div>
        </header>);
    }
}