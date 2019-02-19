import * as Ionicons from 'react-icons/io'
import * as React from "react";
import "./Footer.scss"

export interface FooterProps { text: string; }

export class Footer extends React.Component<FooterProps, {}> {

    private born:any = new Date(1987);
    public year = new Date().getFullYear();
    public age = this.year - this.born;

    render() {
        return ( 
        <footer>
           <div className="about">
                <h3>/ about</h3>
                {/* <h3><Ionicons.IoIosPaperPlane />about</h3> */}
                <div className="me"></div>
                <p>Here I am - something as unusual as a fullstack developer with an eye for design and a sense of humor.
                My name is Erik Nordmark and I am { this.age } years old. I am living in Gothenburg, Sweden, where I am working as a software developer consultant for Devies.
                For more information please visit my <a target="_blank" href="https://linkedin.com/in/nordmarkerik" title="My LinkedIn page">LinkedIn</a>.
                </p>
            </div>
            <div className="contact">
                <h3>/ contact</h3>
                {/* <h3><Ionicons.IoIosContact />contact</h3> */}
                <form>
                    Email:
                    <input type="text" name="email" placeholder="name@mail.com" />
                    Message:
                    <textarea name="message"></textarea>
                    <input type="submit" name="submit" value="Send" className="send" />
                </form>
            </div>
            <div className="socialLinks">
                <a target="_blank" href="https://www.linkedin.com/in/nordmarkerik" title="My LinkedIn page"><Ionicons.IoLogoLinkedin /></a>
                <a target="_blank" href="https://github.com/hxmn" title="My GitHub page"><Ionicons.IoLogoGithub /></a>
            </div>
            <div className="copyright">© {this.year} Erik Nordmark</div>
        </footer>
        );
    }   
}