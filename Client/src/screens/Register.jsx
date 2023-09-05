import Container from '../components/Container';

import { APP_NAME } from '../constants';

import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';
import RadioBtn from "../components/RadioBtn";
import PhoneNumberInput from '../components/PhoneNumber';
import Title from '../components/Title';
import { useState } from 'react';



 const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
  return (
    <>
      <Container  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <form
        style={{
          minWidth: "300px",
          width: "40%",
          marginTop: "50px",
        }} 
        >
        <Title variant="h6" style={{ textAlign: "center"}}>
       Register with {APP_NAME}
       </Title>
       <div>
       
       <TextField 
       label="First Name"
        style={{ marginRight: "10px"}}
        value={firstName}
        handleChange={(e) => setFirstName(e.target.value)}
        
        
       />
       
       <TextField 
       label="Last Name"
        style={{ marginRight: "10px"}}
        value={lastName}
        handleChange={(e) => setLastName(e.target.value)}
        />
       </div>
       <TextField label="outlined"/>
       <TextField variant="filled" label="filled"/>
       <PasswordField label="Password"/>
       <PasswordField label="ConfirmPassword"/>
       <PhoneNumberInput label="PhoneNumber" />
       <RadioBtn 
       label="Gender"
       alignHorizontal
       options={[
        { label: "Male", value: "male"},
        { label: "Female", value: "female"},
        { label: "others", value: "others"},
       ]}/>
       

       </form>
      </Container>
    
    </>
  )
}
 export default Register