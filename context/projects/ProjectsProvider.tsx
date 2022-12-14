import { NextRouter } from "next/router";
import React, { FC, ReactElement, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { ProjectsContext, projectsReducer } from ".";
import projectsApi from "../../apis/projectsApi";
import { Project } from "../../interfaces/Project";
import { ProjectFormTypes } from "../../interfaces/ProjectForm";

export interface ProjectState {
  projectList: Project[];
  isLoading: boolean;
}

const Project_INITIAL_STATE: ProjectState = {
  projectList: [],
  isLoading: false,
};

export const ProjectsProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(projectsReducer, Project_INITIAL_STATE);

  const addNewProject = async (project: ProjectFormTypes,router:NextRouter) => {
    dispatch({ type: "IS_LOADING", payload: true });
    const { data } = await projectsApi.post<Project>("/projects", project);
    dispatch({ type: "IS_LOADING", payload: false });
    dispatch({ type: "ADD_PROJECT", payload: data });
    router.push("/");
    toast.success("Project created successfully!");

  };

  const updateProject = async (project: Project,router:NextRouter) => {
 

    try {
      dispatch({ type: "IS_LOADING", payload: true });
      const { data } = await projectsApi.put<Project>(
        `/projects/${project._id}`,
        project
      );
      dispatch({ type: "IS_LOADING", payload: false });
      dispatch({ type: "UPDATE_PROJECT", payload: data });
      router.push("/");
      toast.success("Project updated successfully!");

    } catch (error) {
      console.log(error);
      dispatch({ type: "IS_LOADING", payload: false });

    } 
  };
  const deleteProject = async (id: string) => {
    try {
      dispatch({ type: "IS_LOADING", payload: true });

      const res = await projectsApi.delete<Project>(`/projects/${id}`);
      dispatch({ type: "IS_LOADING", payload: false });
      dispatch({ type: "DELETE_PROJECT", payload: id });
      toast.success("project removed successfully!");

    } catch (error) {
      console.log(error);
      dispatch({ type: "IS_LOADING", payload: false });
    } 
  };

  const refreshProjects = async () => {
    dispatch({ type: "IS_LOADING", payload: true });

    const { data } = await projectsApi.get<Project[]>("/projects");
    dispatch({ type: "IS_LOADING", payload: false });
    dispatch({ type: "REFRESH_DATA", payload: data });

  };

  useEffect(() => {
    refreshProjects();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        ...state,
        addNewProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
