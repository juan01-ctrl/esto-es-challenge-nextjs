import React, { useContext } from "react";
import { ProjectForm } from "../../components/ui";
import { Layout } from "../../components/layouts/Layout";
import { useRouter } from "next/router";
import { ProjectsContext } from "../../context/projects";
import { GetServerSideProps } from "next";
import { isValidObjectId } from "mongoose";

const EditProject = () => {
  const router = useRouter();
  const { projectList } = useContext(ProjectsContext);

  const projectToUpdate = projectList?.filter(
    (project) => project._id === router.query.id
  );

  return (
    <Layout sectionTitle="Edit Project">
      <section style={{ display: "flex", justifyContent: "center" }}>
        <ProjectForm project={projectToUpdate[0]} />
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  if (!isValidObjectId(id)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return{
    props:{
      id
    }
  }
};

export default EditProject;
