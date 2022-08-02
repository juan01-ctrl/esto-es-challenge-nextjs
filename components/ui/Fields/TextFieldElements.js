import styled from 'styled-components'

export const TextFieldContainer = styled.div`
display:flex;
flex-direction:column;
padding: 0 0 1em 0;
position: relative;

`


export const LabelField = styled.label`
color:#262626;
padding-bottom:.2em;
font-weight:400;
font-size:1.1em;
`

export const InputField = styled.input`
color: #262626 ;
padding:.5em;
background-color: transparent;
border:none;
border-radius:5px;
border: ${props=> props.invalid === "invalid" ?"2px solid hwb(0 11% 1%)" : "1px solid #d9d9d9"};
outline: none;
font-size: 1.1em;

`

export const StyledErrorCircle = styled.div`
position: absolute;
top: 2.2em;
right:.2em;
`