import styled from "styled-components";
import {DotsThreeVertical} from '@styled-icons/entypo/DotsThreeVertical'
import  {Edit} from '@styled-icons/boxicons-solid/Edit'
import {Delete} from '@styled-icons/material-outlined/Delete'

export const ProjectItem = styled.article`
width:100%;
padding:1em 2em;
position:relative;
border-bottom: ${({lastItem})=> !lastItem ? '1px solid #d9d9d9' : 'none'};
background-color:#fff;
display:flex;
flex-direction:${({isDesktop})=> !isDesktop ? 'column' : 'row'};
justify-content:space-between;
align-items:${({isDesktop})=> !isDesktop ? 'auto' : 'center'};
`
export const ProjectTitle = styled.h2`
font-size:1.7em;
font-weight:400;
color:#595959;
padding:0;
margin:0;
`
export const ProjectDescription = styled.h2`
font-size:1em;
font-weight:500;
color:#595959;
padding:0 0 .3em;
margin:0;
width:60%;
word-wrap:break-word;
`
export const ProjectDate = styled.p`
font-size:.8em;
color:#b0b0b0;
margin:0;
`
export const ProjectInfo = styled.h4`
font-size:1.2em;
font-weight:400;
color:#595959;
margin:0;
width:${({isMobile})=>isMobile ? "auto" : "140px"};
margin-top: 0;
border:${({status})=> status ? '1px solid #d9d9d9' : 'none'};
border-radius:${({status})=> status ? '6px' : 'none'};
background:${({status})=> status ? '#f5f5f5' : 'none'};
text-align:center;


`
export const ProjectOptions = styled(DotsThreeVertical)`
position:absolute;
height:1.7em;
top:1.5em;
right:${({isDesktop})=>isDesktop ? "8em": "1.5em"};
color:#262626;
cursor:pointer;
`

export const OptionsMenu = styled.div`
position:absolute;
top:2.7em;
right:${({isDesktop})=>isDesktop ? "8em": "1.5em"};
border-radius:5px;
background-color:#fff;
width:8em;
box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
z-index:999;
`
export const CloseOptions = styled.span`
    content:'x';
    position:absolute;
    top:3px;
    right:3px;
    width:1em;
    height:1em;
    cursor:pointer;
    color:#fff;
    background-color:#f5222d;
    text-align:center;
    line-height:1em;
`


export const OptionsMenuItem = styled.div`
color:#262626;
padding:.6em;
border-bottom: ${({lastItem})=> !lastItem ? '1px solid #d9d9d9' : 'none'};
display:flex;
align-items:center;
gap:.5em;
cursor:pointer;

`

export const EditIcon = styled(Edit)`
width:1.6em;
color:#262626;
`
export const DeleteIcon = styled(Delete)`
width:1.6em;
color:#262626;
`
export const ConfirmDelete = styled.div`
position:fixed;
width:100%;
height:100vh;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
z-index:999;

`

export const ModalDelete = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
background-color:#fff;
padding:1em 1.3em;
box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
height:200px;
width:300px;

`

export const ModalDeleteTitle = styled.h4`
display:inline;
text-align:center;
font-size:1.4em;
margin:0;
`

export const ImgProject = styled.span`
display:inline-block;
width:30px;
height:30px;
border-radius:50%;
background-color:#f5222d;
color:#fff;
text-align:center;
line-height:30px;
margin-right:.2em;
`