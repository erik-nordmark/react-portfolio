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
    tags: string[]
}


export const projectStena: IProject = {
    name: 'Stena Recycling',
    image: stenaDetails,
    text: 'Stena is one of the largest family-owned corporate groups in Sweden and operates worldwide. I worked for Stena Recycling with their customer portal. The customer portal provides the user with updated information and statistics on all of its waste management. My task was, above all, to improve the new user on-boarding experience, by replacing existing applications with new ones. These new web applications were written in Angular 2+ along with TypeScript and included welcome email, registration, and login, as well as associated micro-services to communicate with other parts of the system. I was also responsible for getting these new micro-services tested since this was something that was missing from the beginning.',
    type: 'Fullstack Web developer',
    year: 2018,
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
    text: 'At Volvo Trucks, they are building the next generation of trucks. I was part of the Android development team. They are working to build the new infotainment system that is planned to be released to the public in a near future. The software foundation is mainly Android, but is tightly connected with the truck-specific hardware and also requires knowledge working with network configuration. I did primarily work with an application that handles streams from auxiliary cameras on the network. Moreover, I was working with defining how to work with dependency injection together with Dagger.',
    type: 'Android developer',
    year: 2017,
    tags: [
        'android',
        'kotlin',
        'java'
    ]
};

export const projectOmnipar: IProject = {
    name: 'SKIM Analytics - Omnipar',
    image: omniparDetails,
    text: 'Logo I created for one of their products - Omnipar',
    type: 'Logo design',
    year: 2017,
    tags: [
        'photoshop'
    ]
};

export const projectClaimscheck: IProject = {
    name: 'SKIM Analytics - Claims Check',
    image: claimscheckDetails,
    text: 'Logo I created for one of their products - Claims Check',
    type: 'Logo design',
    year: 2017,
    tags: [
        'photoshop'
    ]
};

export const projectSkim: IProject = {
    name: 'SKIM Analytics - Virtual Shelf',
    image: skimDetails,
    text: 'SKIM virtual shelf displays test products in a competitive environment, on a digital retail shelf, replicating the consumer’s in-store purchase situation. At SKIM, virtual shelves are utilized in Choice-Based Conjoint type of studies, often related to consumer goods portfolio pricing strategies. The power is in closely replicating a retail shelf, while at the same time maximizing our flexibility to influence different aspects of shelf design and measure their impact on consumer choice behavior',
    type: 'Fullstack Web developer',
    year: 2016,
    tags: [
        'angularjs',
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
    tags: [
        'android',
        'java',
        'photoshop'
    ]
};

export const projectErikNordmark: IProject = {
    name: 'eriknordmark.com',
    image: erikNordmarkkDetails,
    text: 'This website!',
    type: 'Design / Web developer',
    year: 2018,
    tags: [
        'react',
        'aws',
        'photoshop',
    ]
};