import React, { createContext } from "react";
import { Project } from "../../interfaces/Project";
import { ProjectFormTypes } from "../../interfaces/ProjectForm";

interface ContextProps {
  projectList: Project[];
  addNewProject: (project: ProjectFormTypes) => void;
  updateProject: (project:Project) => void;
  deleteProject: (id:string) => void;
  isLoading:boolean
}

export const ProjectsContext = createContext({} as ContextProps);
