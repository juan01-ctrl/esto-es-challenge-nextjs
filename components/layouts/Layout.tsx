import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { HeaderSection, Navbar } from "../ui";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  sectionTitle: string;
  isHome?: boolean;
  children: ReactNode;
}

export const Layout: FC<Props> = ({
  title = "Project List",
  sectionTitle,
  isHome,
  children,
}) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
        <HeaderSection sectionTitle={sectionTitle} isHome={isHome} />
      </header>
      <motion.main
        variants={variants} 
        initial="hidden" 
        animate="enter"
        exit="exit" 
        transition={{ type: "linear" }} 
        className=""
      >
        <main
          style={{
            padding: "1em 1.4em",
            backgroundColor: "#f0f2f5",
            minHeight: "90vh",
          }}
        >
          {children}
        </main>
      </motion.main>
    </div>
  );
};
