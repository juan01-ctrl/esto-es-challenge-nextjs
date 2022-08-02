import React from 'react'
import {ErrorMessage, useField} from 'formik'
import {TextFieldContainer,InputField,LabelField,StyledErrorCircle} from './TextFieldElements'
import {ErrorCircle} from '@styled-icons/fluentui-system-regular/ErrorCircle'


type PropTypes = {
  label:string,
  name:string,
  type:string
}



const TextField = ({label,...props}:PropTypes) => {
  const [field,meta] = useField(props)

  return (
    <TextFieldContainer>
 
      <LabelField htmlFor={field.name}>{label}</LabelField>
      <StyledErrorCircle>
      {meta.touched && meta.error && <ErrorCircle size="1.5em" color="hwb(0 11% 1%)"/>}
      </StyledErrorCircle>
      <InputField 
      {...field} {...props}
      invalid={meta.touched && meta.error && "invalid"}
      autoComplete='off'
      />
   

       <ErrorMessage component='div' name={field.name} className="error"/>
    </TextFieldContainer>
  )
}

export default TextField