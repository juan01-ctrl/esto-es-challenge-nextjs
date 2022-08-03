import { NextRouter } from "next/router";
import React, { createContext } from "react";
import { Project } from "../../interfaces/Project";
import { ProjectFormTypes } from "../../interfaces/ProjectForm";

interface ContextProps {
  projectList: Project[];
  addNewProject: (project: ProjectFormTypes,router:NextRouter) => void;
  updateProject: (project:Project,router:NextRouter) => void;
  deleteProject: (id:string) => void;
  isLoading:boolean
}

export const ProjectsContext = createContext({} as ContextProps);
