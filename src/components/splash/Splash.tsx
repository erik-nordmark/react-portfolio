import * as React from "react";
import './Splash.scss';

export interface SplashProps { 
    quote: string; 
    author: string;
}

export class Splash extends React.Component<SplashProps, {}> {
    render() {
        return (
        <div className="splash">
            <div className="text-container">
                <h1>#fact &darr;</h1>
                <p>{this.props.quote}</p>
                <i>-{this.props.author}</i>
            </div>
        </div>
        );
    }
}