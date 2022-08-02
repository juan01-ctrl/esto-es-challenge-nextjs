import React, { FC } from "react";

import { HeaderContainer, SectionTitle } from "./HeaderSectionElements";
import { MainButton } from "../../ui";
import {LeftArrowAlt} from '@styled-icons/boxicons-regular/LeftArrowAlt'
import Link from "next/link";


interface Props {
  sectionTitle: string;
  isHome?: boolean;
}

export const HeaderSection: FC<Props> = ({ sectionTitle, isHome }) => {
  return (
    <HeaderContainer isHome={isHome}>
      {isHome ? (
        <>
        <Link href="/addProject">
         <a>
        <MainButton>
          Add Project
          <span style={{ fontSize: "1.5em", paddingRight: ".3em" }}>+</span>
        </MainButton>
         </a> 
        </Link>
         <SectionTitle style={{lineHeight:"100%"}}>{sectionTitle}</SectionTitle>
        </>
      ) : (
      <div style={{display:"flex", alignItems:"center",gap:".5em"}}>

        <Link href="/">
          <a style={{display:"flex",alignItems:"center",color:"#595959"}}>
        <LeftArrowAlt style={{width:"3em",cursor:"pointer"}}/>
        <span style={{fontSize:"1.1em",lineHeight:"1"}}>Back</span> 
          </a>
        </Link>
        <SectionTitle style={{lineHeight:"100%"}}>{sectionTitle}</SectionTitle>
        </div>
        )}
    </HeaderContainer>
  );
};
