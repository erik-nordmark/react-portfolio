const swegonDetails = require("../images/swegon_details.png");
const deviesDetails = require("../images/devies_details.png");
const stenaDetails = require("../images/stena_details.png");
const volvoDetails = require("../images/volvo_details.png");
const skimDetails = require("../images/virtual_shelf_details.png");
const milestoneDetails = require("../images/milestone_details.png");
const mouseophonicDetails = require("../images/mouseophonic_details.png");
const omniparDetails = require("../images/omnipar_details.png");
const claimscheckDetails = require("../images/claimscheck_details.png");
const erikNordmarkkDetails = require("../images/erik_nordmark_details.png");

export interface IProject {
    name: string,
    image: any,
    text: string,
    type: string,
    year: number;
    start: string;
    end: string;
    location: string;
    link: string;
    resume: boolean;
    tags: string[]
}

export const projectVolvoIt: IProject = {
    name: 'Volvo Group IT',
    image: volvoDetails,
    text: 'I am in a project for Volvo IT to help them decide the overall software architecture for a new project aiming for the aftermarket. My role is more focusing on front-end architecture. One of the biggest obstacles in this project is the many integrations with old and somewhat outdated systems.',
    type: 'Front-end Architect',
    year: 2019,
    start: 'Q3 2019',
    end: '',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: true,
    tags: [
        'javascript',
        'microfrotends',
        'microservices'
    ]
};

export const projectSwegon: IProject = {
    name: 'Swegon',
    image: swegonDetails,
    text: 'Swegon is the market leader in energy-efficient ventilation and indoor climate systems. The business comprises five different business areas and has 2,200 employees in Europe, North America, and Asia. I had two separate assignments at Swegon. One was to develop a new and faster print service in C # and Razor. The service takes Json data and converts this data into an html preview and a pdf file for printing. The other one is to be part of the front-end team, building new features and maintenance in their current React application.',
    type: 'Fullstack developer',
    year: 2019,
    start: 'Q1 2019',
    end: 'Q3 2019',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: true,
    tags: [
        'react',
        'html',
        'css',
        'c#',
        'razor'
    ]
};

export const projectDevies: IProject = {
    name: 'Devies',
    image: deviesDetails,
    text: 'Devies is a custom software development company which was started in 2016. We work within the entire development process - from ideation to implementation - and offer technical competence to suit our clients need, regardless of size. I joined the task force to help out builing our new website. It is a React application with a wordpress back-end.',
    type: 'Front-end Web developer',
    year: 2019,
    start: 'Q1 2019',
    end: 'Q1 2019',
    link: 'http://www.devies.se',
    location: 'Gothenburg, SWEDEN',
    resume: false,
    tags: [
        'react',
        'html',
        'css',
        'wordpress'
    ]
};

export const projectStena: IProject = {
    name: 'Stena Recycling',
    image: stenaDetails,
    text: 'Stena is one of the largest family-owned corporate groups in Sweden and operates worldwide. I worked for Stena Recycling with their customer portal. The customer portal provides the user with updated information and statistics on all of its waste management. My task was, above all, to improve the new user on-boarding experience, by replacing existing applications with new ones. These new web applications were written in Angular 2+ along with TypeScript and included welcome email, registration, and login, as well as associated micro-services to communicate with other parts of the system. I was also responsible for getting these new micro-services tested since this was something that was missing from the beginning.',
    type: 'Fullstack Web developer',
    year: 2018,
    start: 'Q2 2018',
    end: 'Q4 2018',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: true,
    tags: [
        'angular',
        'html',
        'css',
        'node',
        'mongodb'
    ]
};

export const projectVolvo: IProject = {
    name: 'Volvo Trucks',
    image: volvoDetails,
    text: 'At Volvo Trucks, they are building the next generation of trucks. I was part of the Android development team. They are working to build the new infotainment system that is planned to be released to the public in the near future. The software foundation is mainly Android, but is tightly connected with the truck-specific hardware and also requires knowledge working with network configuration. I did primarily work with an application that handles streams from auxiliary cameras on the network. Moreover, I was working with defining how to work with dependency injection together with Dagger.',
    type: 'Android developer',
    year: 2017,
    start: 'Q3 2017',
    end: 'Q2 2018',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: true,
    tags: [
        'android',
        'kotlin',
        'java'
    ]
};

export const projectOmnipar: IProject = {
    name: 'SKIM Analytics',
    image: omniparDetails,
    text: '',
    type: 'Logo design',
    year: 2017,
    start: '',
    end: '',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: false,
    tags: [
        'photoshop'
    ]
};

export const projectClaimscheck: IProject = {
    name: 'SKIM Analytics',
    image: claimscheckDetails,
    text: '',
    type: 'Logo design',
    year: 2017,
    start: '',
    end: '',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: false,
    tags: [
        'photoshop'
    ]
};

export const projectSkimGbg: IProject = {
    name: 'SKIM Analytics',
    image: skimDetails,
    text: 'I continued to work on the Virtual Shelf back in Gothenburg, where I was a part of SKIMs first office in Sweden.',
    type: 'Fullstack Web developer',
    year: 2016,
    start: 'Q2 2017',
    end: 'Q3 2017',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: true,
    tags: [
        'angular',
        'html',
        'css',
        'node',
        'mongodb',
        'photoshop'
    ]
};

export const projectSkimNyc: IProject = {
    name: 'SKIM Analytics',
    image: skimDetails,
    text: 'SKIM virtual shelf displays test products in a competitive environment, on a digital retail shelf, replicating the consumer’s in-store purchase situation. At SKIM, virtual shelves are utilized in Choice-Based Conjoint type of studies, often related to consumer goods portfolio pricing strategies. The power is in closely replicating a retail shelf, while at the same time maximizing our flexibility to influence different aspects of shelf design and measure their impact on consumer choice behavior.',
    type: 'Fullstack Web developer',
    year: 2016,
    start: 'Q2 2016',
    end: 'Q2 2017',
    link: '',
    location: 'New York, USA',
    resume: true,
    tags: [
        'angular',
        'html',
        'css',
        'node',
        'mongodb',
        'photoshop'
    ]
};

export const projectMilestone: IProject = {
    name: 'Milestone',
    image: milestoneDetails,
    text: 'An Android application that is used as a navigation system specifically for truck drivers. The application has a dynamic user interface that changes when the truck stops or starts driving. The navigation system uses a combination of Google Maps API, Automotive Grade Android SDK and an external API to find the best matching truck specific milestones on a route. The data is intelligently combined and safely displayed to the driver.',
    type: 'Design / Android developer',
    year: 2015,
    start: '',
    end: '',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: false,
    tags: [
        'android',
        'java',
        'photoshop'
    ]
};

export const projectMouseophonic: IProject = {
    name: 'Mouseophonic',
    image: mouseophonicDetails,
    text: 'An Android application that is used to manipulate the mousepointer or control a presentation on a desktop computer. Using the sensors on the phone and interaction with the screen on the Android device, data is collected and mapped to the computers coordinate system. The data is sent over bluetooth to a receiving application on the desktop and the mousepointer is manipulated.',
    type: 'Design / Android developer',
    year: 2014,
    start: '',
    end: '',
    link: '',
    location: 'Gothenburg, SWEDEN',
    resume: false,
    tags: [
        'android',
        'java',
        'photoshop'
    ]
};

export const projectErikNordmark: IProject = {
    name: 'eriknordmark.com',
    image: erikNordmarkkDetails,
    text: '',
    type: 'Design / Web developer',
    year: 2018,
    start: '',
    end: '',
    link: '',
    location: '',
    resume: false,
    tags: [
        'react',
        'aws',
        'photoshop',
    ]
};

export const projects: IProject[] = [
    projectVolvoIt,
    projectSwegon,
    projectDevies,
    projectStena,
    projectVolvo,
    projectOmnipar,
    projectClaimscheck,
    projectSkimGbg,
    projectSkimNyc,
    projectMilestone,
    projectMouseophonic,
    projectErikNordmark
]