import React from 'react'
import {ErrorMessage, useField} from 'formik'
import {SelectContainer, Select,Option,LabelSelect} from './SelectFieldsElements'


type propTypes = {
    options:string[];
    name:string;
    label:string
} 



const SelectFields = ({options,name,label}:propTypes) => {
  const [field,meta] = useField({name})
  

  return (
      <SelectContainer>
        <LabelSelect>{label}</LabelSelect>
    <Select  invalid={meta.touched && meta.error && "invalid"} {...field} >
        {options.map((opt,i)=>
            <Option value={i === 0 ? "" : opt} key={i}>{opt}</Option>
        )}
    </Select>
       <ErrorMessage component='div' name={field.name} className="error"/>
    </SelectContainer>
  )
}

export default SelectFields