export interface IProject {
    name: string,
    images: any[],
    previewImage: any;
    text: string,
    type: string,
    year: Date;
    start: string;
    end: string;
    location: string;
    link: string;
    resume: boolean;
    employmentType: string;
    tags: string[]
}