import React, {useState, useEffect} from 'react'
import { Card } from '../Shared/components/Card'
import { Button, Input } from '../Shared/components'
import { fieldsList, handleSubmitForm, isFieldValid, EmptyformFields } from './Form.services'

import "./Form.styles.css"


const Form = () => {
  const [formFields, setFormFields ] = useState(EmptyformFields);
  const [validatedFields, setvalidatedFields]= useState(true);
  const [fieldsForm,setFieldForm ]=useState(fieldsList);

  useEffect(() => {
      if(fieldsList.length  === fieldsForm.filter((field)=>field.flag).length) 
       {   
        setvalidatedFields(false);
      }else{
        setvalidatedFields(true);
      }

  },[fieldsForm])

  const ClearFields=()=>{
    setFormFields(EmptyformFields)
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({
        ...formFields,
        [name]: value
      });

  setFieldForm(fieldsForm.map((field)=>{
        if (field.name===name && isFieldValid(value)){
          const updateField={
            ...field,
            flag:true,
          }
          return updateField
        }
        return field
  }));


}

const CheckForm=()=>{

  setFormFields(EmptyformFields);
  setFieldForm(fieldsList);
  //Validation Flag
  setvalidatedFields(true);
  //Send Values
  handleSubmitForm();


}



  return (
    <Card width={"50%"}>
      {
       fieldsForm.map(({name,label,type})=>(

        <div className="form" key={name}>
        <Input label={label} type={type} name={name} value={formFields[name]} ChangeValue={onInputChange} />
      </div>

       )) 
      }
      <div className="form-actions">
        <Button title="Clear" style={{color: "darkorange",  borderColor:'white'}} onClickButton={ClearFields}/>
        <Button title="Subscribe" disabled={validatedFields} onClickButton={CheckForm}/>
      </div>
    </Card>
  )
}

export default Form