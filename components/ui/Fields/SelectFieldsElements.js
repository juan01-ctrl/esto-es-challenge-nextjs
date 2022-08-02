import styled from 'styled-components'

export const SelectContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom:.6em;
`

export const Select= styled.select`
width: 100%;
color:#262626;
padding:.5em;
background-color: transparent;
border-radius: 5px;
font-size: 1.1em;
cursor:pointer;
border: ${props=> props.invalid === "invalid" ? "2px solid #ff452b" : "1px solid #d9d9d9"};
outline:none;
`

export const LabelSelect = styled.label`
margin-bottom:.2em;
color:#262626;
font-size:1.1em;

`

export const Option = styled.option`
width:100%;

`




