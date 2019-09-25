import * as React from "react";
import './Splash.scss';

const splash = require('../../assets/images/hello_world.gif');

export interface SplashProps { 
    quote: string; 
    author: string;
}

export class Splash extends React.Component<SplashProps, {}> {
    render() {
        return (
        <div className="splash">
            <div className="text-container">
                <img src={String(splash)} alt="Hello World"></img>
            </div>
        </div>
        );
    }
}