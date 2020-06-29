import { createContext } from 'react';
import { IProject } from '../interfaces/iProject';

interface ProjectContextType {
    projects : IProject[],
    setProjects : Function
}

export const ProjectContext = createContext<Partial<ProjectContextType>>({projects: []});
