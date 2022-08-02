import React from 'react'
import { ProjectForm } from '../../components/ui'
import { Layout } from '../../components/layouts/Layout';

const index = () => {

  return (
     <Layout sectionTitle="Add Project">
      <section style={{display:"flex",justifyContent:"center"}}>
        <ProjectForm/>
      </section>
    </Layout>
  )
}

export default index
