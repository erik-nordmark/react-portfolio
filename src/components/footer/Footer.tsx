import * as React from "react";
import "./Footer.scss"

export interface FooterProps { text: string; }

export class Footer extends React.Component<FooterProps, {}> {
    render() {
        return ( 
        <footer>
           <div className="about">
                <div className="me"></div>
                <h3>about me</h3>
                <p>Here I am - something as unusual as a developer with a sense of humor and an eye for design.
                My name is Erik Nordmark and I am <script>document.write(new Date().getFullYear() - new Date(1987))</script> years old. I am living in Gothenburg where I am working as a software developer consultant for Devies.
                For more information please visit my <a href="https://linkedin.com/in/nordmarkI" title="My LinkedIn page">LinkedIn</a>.
                </p>
            </div>
            <div className="contact">
                <h3>contact me</h3>
                {/* <form method="post" action="php/mail.php">
                    Your email:<br>
                    <input type="text" name="email" placeholder="name@mail.com" />
                    Your message:<br>
                    <textarea name="message"></textarea><br>
                    <input type="submit" name="submit" value="Send" className="send" />
                </form> */}
            </div>
        </footer>
        );
    }   
}