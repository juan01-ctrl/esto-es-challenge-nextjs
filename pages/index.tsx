import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { Layout } from "../components/layouts/Layout";
import { ProjectListContainer } from "../components/ui";
import { HeaderList, HeaderListContainer } from "../components/ui/ProjectListContainer/ProjectListContainerElements";

const Home: NextPage = () => {
  const [searchQry, setSearchQry] = useState("");

  const [width, setWidth] = useState<number>();
 

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
     setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isDesktop = width! >= 1000;

  console.log(isDesktop);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQry(e.target.value);
  };

  return (
    <Layout sectionTitle="My Projects" isHome={true}>
      <div>
        <h3 style={{ margin: "0 0 .3em" }}>Search Project by Name:</h3>
        <input
          type="text"
          style={{
            borderRadius: "6px",
            padding: ".4em",
            outline: "none",
            border: "1px solid #d9d9d9",
            width: "250px",
          }}
          onChange={handleSearch}
          placeholder="example: Develop e-commerce"
        />
      </div>

      {isDesktop && (
        <HeaderListContainer>
          <HeaderList>Project info</HeaderList>
          <HeaderList>Project Manager</HeaderList>
          <HeaderList>Assigned to</HeaderList>
          <HeaderList>Status</HeaderList>
          <HeaderList>Action</HeaderList>
        </HeaderListContainer>
      )}
      <ProjectListContainer
        status="Pending"
        searchQry={searchQry}
        isDesktop={isDesktop}
        
      />
      <ProjectListContainer
        status="In Progress"
        searchQry={searchQry}
        isDesktop={isDesktop}

      />
      <ProjectListContainer
        status="Finished"
        searchQry={searchQry}
        isDesktop={isDesktop}

      />
    </Layout>
  );
};

export default Home;
