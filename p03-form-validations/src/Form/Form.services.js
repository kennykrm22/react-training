export const fieldsList = [
  {
    name: "name",
    label: "User first name",
    type: "text",
    flag: false
  },
  {
    name: "lastname",
    label: "User lastname",
    type: "text",
    flag: false
  },
  {
    name: "birth_date",
    label: "User birthdate",
    type: "date",
    flag: false
  },
  {
    name: "country",
    label: "Country where the user is living",
    type: "text",
    flag: false
  },
  {
    name: "password",
    label: "User password",
    type: "password",
    flag: false
  },
]

export const EmptyformFields={
  name:'',
  lastname:'',
  birth_date: '',
  country:'',
  password:''

}

export const isFieldValid = (value) => {
  // here should be the field validations 
  return value.split(' ').join('_').length >=1 && true;
}

export const handleSubmitForm = () => {
  // don't focus on submit functionality yet.
  console.log("Form Submitted!");

}