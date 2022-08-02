import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProjectsProvider } from "../context/projects";



function MyApp({ Component, pageProps }: AppProps) {
  return(
  <ProjectsProvider>
   <Component {...pageProps} />
  </ProjectsProvider>)
}

export default MyApp;
