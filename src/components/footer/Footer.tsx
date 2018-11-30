import * as Ionicons from 'react-icons/io'
import * as React from "react";
import "./Footer.scss"

export interface FooterProps { text: string; }

export class Footer extends React.Component<FooterProps, {}> {

    public year = new Date().getFullYear();

    render() {
        return ( 
        <footer>
           <div className="about">
                <h3>/ about</h3>
                {/* <h3><Ionicons.IoIosPaperPlane />about</h3> */}
                <div className="me"></div>
                <p>Here I am - something as unusual as a developer with a sense of humor and an eye for design.
                My name is Erik Nordmark and I am <script>document.write(new Date().getFullYear() - new Date(1987))</script> years old. I am living in Gothenburg where I am working as a software developer consultant for Devies.
                For more information please visit my <a href="https://linkedin.com/in/nordmarkerik" title="My LinkedIn page">LinkedIn</a>.
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
            <div className="socialLinks"><Ionicons.IoLogoLinkedin /><Ionicons.IoLogoGithub /></div>
            <div className="copyright">© {this.year} Erik Nordmark</div>
        </footer>
        );
    }   
}