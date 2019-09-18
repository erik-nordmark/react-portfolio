import * as Ionicons from 'react-icons/io'
import * as React from "react";
import "./Footer.scss"

import { SectionHeader } from "../SectionHeader/SectionHeader";

export interface FooterProps { text: string; }

export class Footer extends React.Component<FooterProps, {}> {

    private born:any = new Date(1987);
    public year = new Date().getFullYear();
    public age = this.year - this.born;

    render() {
        return ( 
        <footer>
            <svg className="diagonal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="100,0 0,0 100,100"/>
            </svg>
            
            <div className="footer-header">
                <SectionHeader text="About" />
            </div>

            <div className="about">
                {/* <h3>/ about</h3> */}
                {/* <h3><Ionicons.IoIosPaperPlane />about</h3> */}
                <div className="me"></div>
                <p>Here I am - a fullstack developer with an eye for design and a sense of humor. My name is Erik Nordmark and I am { this.age } years old. I am living in Gothenburg, Sweden, where I am working as a software developer consultant for Devies.<br /><br />
                As a developer and a designer I live by the quote <i>”Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away”</i>. I guess I am just a big fan of simplicity and clean design. I think code should be written in a way so that it is easy to read and understand over fast and overly optimized code. Maintainability is everything.<br /><br />
                I am also passionated about craft beer, running and gaming (Dota 2).<br /><br />
                For more information please visit my <a target="_blank" href="https://linkedin.com/in/nordmarkerik" title="My LinkedIn page">LinkedIn</a>.
                </p>
            </div>
            {/* <div className="contact">
                <h3>/ contact</h3>
                <form>
                    Email:
                    <input type="text" name="email" placeholder="name@mail.com" />
                    Message:
                    <textarea name="message"></textarea>
                    <input type="submit" name="submit" value="Send" className="send" />
                </form>
            </div> */}
            <div className="socialLinks">
                <a target="_blank" href="https://www.linkedin.com/in/nordmarkerik" title="My LinkedIn page"><Ionicons.IoLogoLinkedin /></a>
                <a target="_blank" href="https://github.com/hxmn" title="My GitHub page"><Ionicons.IoLogoGithub /></a>
                <a target="_blank" href="mailto:me@eriknordmark.com" title="My Email"><Ionicons.IoIosPaperPlane /></a>

            </div>
            <div className="copyright">© {this.year} Nordev AB</div>
        </footer>
        );
    }   
}