import * as React from "react";
import * as Ionicons from 'react-icons/io'

import './Cv.scss';

import { Assignment } from "../Assignment/Assignment"
import { Resume } from "../Resume/Resume";
import { projects } from '../../assets/data/projects';

export class Cv extends Resume {

    render() {

        const projectsToShow = projects.filter(project => project.resume);

        return (
            <section className="resume full">
                <div className="resume">
                    <h1>Erik Nordmark</h1>
                    <div className="contact-container">
                        <h3>Mobile</h3><h4><a href="tel:0046702144451">0046 (0)702 144 451</a></h4>
                    </div>
                    <div className="contact-container">
                        <h3>Email</h3><h4><a target="_blank" href="mailto:me@eriknordmark.com" title="My Email">e.n.nordmark@gmail.com</a></h4>
                    </div>
                    <div className="resume header">
                        <div className="objective">
                        I am an outgoing and positive guy with several years of working experience. With extensive practical knowledge and work experience in, especially with UI / UX design, I want to distinguish myself as a developer through hard work, perseverance and dedication. And perform tasks with efficiency and professionalism.
                        </div>
                        <div className="me"></div>
                    </div> 
                </div>

                <h2>Education</h2>
                <Assignment
                    company="Chalmers School of Technology"
                    start="Q3 2013"
                    end="Q2 2016"
                    position="Information Technology"
                    location="Gothenburg, SWEDEN"
                    text=""
                    />

                <Assignment
                    company="Chalmers School of Technology"
                    start="Q3 2012"
                    end="Q2 2013"
                    position="Technical Introductory course"
                    location="Gothenburg, SWEDEN"
                    text=""
                    />
                
                <h2>Resumé</h2>
                { projectsToShow.map(project => {
                    return <Assignment
                    company={project.name}
                    start={project.start}
                    end={project.end}
                    position={project.type}
                    location={project.location}
                    text={project.text}
                    tags={project.tags}
                    />
                })
                }

                <h2>Expertise</h2>
                <div className="areas">
                    <div className="left">
                        <h3>Areas of Expertise</h3>
                        <ul>
                            <li>User interface</li>
                            <li>Graphical interface</li>
                            <li>Interaction design</li>
                            <li>System integration</li>
                            <li>System architecture</li>
                            <li>Mobile development</li>
                            <li>App development</li>
                            <li>Java development</li>
                            <li>Web development</li>
                            <li>System development</li>
                            <li>User tests</li>
                        </ul>


                        <h3>Industry Experience</h3>
                        <ul>
                            <li>Automotive</li>
                            <li>Recycling</li>
                            <li>Marketing research</li>
                            <li>Healthcare</li>
                            <li>Climate</li>
                        </ul>

                        <h3>Languages and Libraries</h3>
                        <p>Kotlin, Espresso, Mocha, Karma, Jasmine, Mongoose, TypeScript, RxJava, SASS, Java, XML Schema, XHTML, JavaScript, CSS3, HTML5, SQL, C++, C, C#, .NET, jQuery, Ajax, node.js, PHP, Android, Assembler, bash, Angular, React, Backbone, Bootstrap,  Docker, AWS</p>
                    </div>
                    <div className="right">
                        <h3>Web and Mobile Development</h3>
                        <p>XML, Angular, AngularJS, Kotlin, Android, TypeScript, ES6, SASS, CSS/CSS3, HTML/HTML5, JSON, XML, Android, React</p>

                        <h3>Architecture and Design</h3>
                        <p>Functional Dependencie, UML, E/R-diagram, SOAP, REST</p>

                        <h3>Agile Methodologies</h3>
                        <p>SCRUM, Kanban</p>

                        <h3>Configuration Managment</h3>
                        <p>Git</p>

                        <h3>Databases</h3>
                        <p>MSSQL, MySQL, Oracle, SQLite, PostgresSql, MongoDB</p>
                        
                        <h3>Applications</h3>
                        <p>Azure, Trello, Atlassian, Visual Studio Code, WebStorm, Adobe Illustrator, OSX, Gradle, Microsoft, Windows NT/95/2000/2003/XP/ 7/8/10, Linux, UNIX, Adobe Photoshop, Apache, Eclipse, SSH, SSL, NetBeans, PuTTY, IntelliJ IDEA, Maven, Android Stuido, Xcode, Atom, Vim, Docker, AWS</p>
                    </div>
                </div>

                {/* <h2>Skills</h2>

                <h2>Private</h2>
                <Ionicons.IoIosRocket /> Harness <Ionicons.IoMdBeer /> Dota2 */}
                <h5 className="references">References available on request</h5>
            </section>
        );
    }
}