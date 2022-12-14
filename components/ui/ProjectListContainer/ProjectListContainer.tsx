import React, { FC, useContext, useMemo } from "react";
import { ProjectList, StatusHeader } from "./ProjectListContainerElements";
import { ProjectListItem } from "../ProjectListItem/ProjectListItem";
import { ProjectsContext } from "../../../context/projects";
import { ProjectStatus } from "../../../interfaces/Project";
import { formatAMPM, formatDate } from "../../../utils/formatDate";
import { Loader } from "../MicroComponents/Loader/Loader";

interface Props {
  status?: ProjectStatus;
  searchQry?: string;
  isDesktop?: boolean;
}

export const ProjectListContainer: FC<Props> = ({
  status,
  searchQry,
  isDesktop,
}) => {
  const { projectList, isLoading } = useContext(ProjectsContext);

  const projectsByStatus = useMemo(
    () => projectList.filter((project) => project.status === status),
    [projectList]
  );

  const filterProjects = () => {
    if (searchQry) {
      return projectsByStatus.filter((project) =>
        project.projectName
          ?.toLocaleLowerCase()
          .includes(searchQry.toLocaleLowerCase())
      );
    }
    return projectsByStatus;
  };

  if (!filterProjects().length) return <>{isLoading ? <Loader /> : <></>}</>;
  return (
    <>
      {!isDesktop && <StatusHeader>{status}</StatusHeader>}
      {isLoading ? (
        <Loader />
      ) : (
        <ProjectList>
          {filterProjects()?.map((project, idx) => (
            <ProjectListItem
              key={project._id}
              project={project}
              lastItem={idx === projectsByStatus.length - 1}
              isDesktop={isDesktop}
            />
          ))}
        </ProjectList>
      )}
    </>
  );
};
