import styled from 'styled-components'

export const HeaderContainer = styled.div`
width:100%;
padding:0 1.5em;
border-bottom:1px solid #d9d9d9;
display:flex;
align-items:center;
justify-content:space-between;
direction: ${({isHome})=> isHome ? 'rtl' : 'auto'};
`
export const SectionTitle = styled.h1`
font-size:2em;
font-weight:500;
text-align:left;
`