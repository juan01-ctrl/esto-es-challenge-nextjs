import { ProjectState } from "./ProjectsProvider";
import { Project } from "../../interfaces/Project";

type ProjectActionType =
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "UPDATE_PROJECT"; payload: Project }
  | { type: "DELETE_PROJECT"; payload: string }
  | { type: "REFRESH_DATA"; payload: Project[] };

export const projectsReducer = (
  state: ProjectState,
  action: ProjectActionType
): ProjectState => {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projectList: [...state.projectList, action.payload],
      };
    case "UPDATE_PROJECT":
      return {
        ...state,
        projectList: state.projectList.map((project) => {
          if (project._id === action.payload._id) {
            project.projectName = action.payload.projectName;
            project.status = action.payload.status;
            project.description = action.payload.description;
            project.projectManager = action.payload.projectManager;
            project.assignedTo = action.payload.assignedTo;
          }
          return project;
        }),
      };
    case "DELETE_PROJECT":
      console.log(action.payload,state.projectList)
      return {
        ...state,
        projectList: state.projectList.filter(
          (project) => project._id !== action.payload
        )
      };

    case "REFRESH_DATA":
      return {
        ...state,
        projectList: [...action.payload],
      };

    default:
      return state;
  }
};
