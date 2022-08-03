import React, { FC, useContext } from "react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { validateNewProject } from "../../../schemas/ProjectFormSchema";
import SelectFields from "../Fields/SelectFields";
import TextField from "../Fields/TextFields";
import { MainButton } from "../MicroComponents/Buttons/MainButton";
import { ProjectsContext } from "../../../context/projects/ProjectsContext";
import { ProjectFormTypes } from "../../../interfaces/ProjectForm";
import { Project } from "../../../interfaces/Project";
import toast, { Toaster } from "react-hot-toast";
import {useState} from 'react';
import { Loader } from '../MicroComponents/Loader/Loader';

interface Props {
  project?: Project;
}

export const ProjectForm: FC<Props> = ({ project }) => {
  const router = useRouter();


  const { addNewProject, updateProject,isLoading } = useContext(ProjectsContext);

  const handleSubmit = (values: ProjectFormTypes) => {
   
    if (project) {
       updateProject({ ...project, ...values });
       toast.success("Project updated successfully!");
       setTimeout(()=>{
        router.push("/");
      },500)
      return;
    }
    addNewProject(values);

    toast.success("Project created successfully!");
    setTimeout(()=>{
      router.push("/");
    },500)
  };
  return (
    <Formik
      initialValues={{
        projectName: project?.projectName || "",
        description: project?.description || "",
        projectManager: project?.projectManager || "",
        assignedTo: project?.assignedTo || "",
        status: project?.status || "",
      }}
      onSubmit={(values: ProjectFormTypes) => handleSubmit(values)}
      validationSchema={validateNewProject}
    >
      {(formik) => {
        return (
          <div
            style={{
              padding: "3em 2em",
              maxWidth: "700px",
              backgroundColor: "#fff",
              borderRadius: "3px",
              flexGrow: "1",
            }}
          >
            
            {isLoading &&<Loader/>}
            <Form>
              <TextField label="Project name" name="projectName" type="text" />
              <TextField label="Description" name="description" type="text" />
              <SelectFields
                label="Project manager"
                name="projectManager"
                options={[
                  "Select a person",
                  "Ignacio Truffa",
                  "Jorge López",
                  "Lucas Ramirez",
                ]}
              />
              <SelectFields
                label="Assigned to"
                name="assignedTo"
                options={[
                  "Select a person",
                  "Ignacio Truffa",
                  "Jorge López",
                  "Lucas Ramirez",
                ]}
              />

              <SelectFields
                label="Status"
                name="status"
                options={[
                  "Select a status",
                  "Pending",
                  "In Progress",
                  "Finished",
                ]}
              />
              <div style={{ paddingTop: "1em" }}>
                <MainButton type="submit">
                  {project ? "Save Changes" : "Create project"}
                </MainButton>
              </div>
            </Form>
            <Toaster />
          </div>
        );
      }}
    </Formik>
  );
};
