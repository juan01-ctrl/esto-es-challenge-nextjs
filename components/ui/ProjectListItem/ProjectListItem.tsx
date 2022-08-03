import React, { FC, useContext, useState } from "react";
import {
  CloseOptions,
  ConfirmDelete,
  DeleteIcon,
  EditIcon,
  ImgProject,
  ModalDelete,
  ModalDeleteTitle,
  OptionsMenu,
  OptionsMenuItem,
  ProjectInfo,
  ProjectDate,
  ProjectDescription,
  ProjectItem,
  ProjectOptions,
  ProjectTitle,
} from "./ProjectListItemElements";
import { Project } from "../../../interfaces/Project";
import { useRouter } from "next/router";
import { ProjectsContext } from "../../../context/projects";
import { MainButton } from "../MicroComponents/Buttons/MainButton";

interface Props {
  project: Project;
  lastItem?: boolean;
  isDesktop?: boolean;
}

export const ProjectListItem: FC<Props> = ({
  project,
  lastItem = false,
  isDesktop,
}) => {
  const router = useRouter();
  const { deleteProject } = useContext(ProjectsContext);

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  const toggleOptions = () => {
    setIsOpenOptions((prev) => !prev);
  };
  return (
    <>
      <ProjectItem lastItem={lastItem} isDesktop={isDesktop}>
        <div style={{ width: `${isDesktop ? "120px" : "auto"}` }}>
          <ProjectTitle>{project.projectName}</ProjectTitle>
          <ProjectDate>Creation date: {project.createdAt}</ProjectDate>
        </div>
        {isDesktop && (
          <div style={{ display: "flex" }}>
            <ImgProject>{project.projectManager![0]}</ImgProject>
            <ProjectInfo>{project.projectManager}</ProjectInfo>{" "}
          </div>
        )}

        <div
          style={{ display: "flex", marginTop: `${!isDesktop ? ".6em" : "0"}` }}
        >
          <ImgProject>{project.assignedTo![0]}</ImgProject>
          <ProjectInfo isMobile={!isDesktop}>{project.assignedTo}</ProjectInfo>
        </div>

        {isDesktop && (
          <>
            <ProjectInfo status={true}>{project.status}</ProjectInfo>
            <div style={{ width: "120px" }}></div>
          </>
        )}
        <ProjectOptions onClick={toggleOptions} isDesktop={isDesktop} />
        {isOpenOptions && (
          <OptionsMenu isDesktop={isDesktop}>
            <OptionsMenuItem
              onClick={() => {
                router.push(`/editProject/${project._id}`);
                setIsOpenOptions(false);
              }}
            >
              <EditIcon />
              Edit
            </OptionsMenuItem>
            <OptionsMenuItem
              lastItem={true}
              onClick={() => {
                setConfirmDelete(true);
                setIsOpenOptions(false);
              }}
            >
              <DeleteIcon />
              Delete
            </OptionsMenuItem>
            <CloseOptions onClick={() => setIsOpenOptions(false)}>
              X
            </CloseOptions>
          </OptionsMenu>
        )}
        {confirmDelete && (
          <ConfirmDelete>
            <ModalDelete>
              <ModalDeleteTitle>
                Are you sure you want to delete this project?
              </ModalDeleteTitle>
              <div
                style={{
                  display: "flex",
                  gap: ".5em",
                  padding: "1em",
                  justifyContent: "center",
                }}
              >
                <MainButton
                  handleClick={() => setConfirmDelete(false)}
                  bgColor="invert"
                >
                  Cancel
                </MainButton>

                <MainButton
                  handleClick={() => {
                    deleteProject(project._id!);
                    setConfirmDelete(false);
                  }}
                >
                  Confirm
                </MainButton>
              </div>
            </ModalDelete>
          </ConfirmDelete>
        )}
      </ProjectItem>
    </>
  );
};
