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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [gender, setGender] = useState("")


   return(
    <>
      <Container  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <form
        style={{
        
          minWidth: "300px",
          width: "40%",
          marginTop: "30px",
          
        }} 
        >
          
        <Title 
        variant="h6" 
        style={{ 
          textAlign: "center"
          }}>
            
       Register with {APP_NAME}
        
       </Title>
       <div style={{display: "flex"}}>
       
       <TextField 
       label="First Name"
        style={{ 
          marginRight: "10px",
          marginBottom: "20px"
        }}
        value={firstName}
        handleChange={(e) => setFirstName(e.target.value)}
        
        
       />
       
       <TextField 
       label="Last Name"
        style={{ 
          marginLeft: "10px"
        }}
        value={lastName}
        handleChange={(e) => setLastName(e.target.value)}
        />
       </div>
       <TextField 
       label="E-mail"
       style={{
        marginBottom: "20px"
       }}
       value={email}
       handleChange={(e) => setEmail(e.target.value)}

       />
      
       <PasswordField 
       label="Password"
       
       value={password} 
       handleChange={(e) => setPassword(e.target.value)}
       />
       <PasswordField 
       label="Confirm Password"
    
       value={confirmPassword}
       handleChange={(e) => setConfirmPassword(e.target.value)} 
       />
       <PhoneNumberInput 
       label="Phone Number" 
   
       value={phoneNumber}
       handleChange={(e) => setPhoneNumber(e.target.value)}

       />
       <RadioBtn 
       label="Gender"
       style={{
        marginBottom: "50px"
       }}
       alignHorizontal
       options={[
        { label: "Male", value: "male"},
        { label: "Female", value: "female"},
        { label: "others", value: "others"},
       ]}
       selectedOption={gender}
       handleChange={(e) => setGender(e.target.value)}
       />
       

       </form>
      </Container>
    
    </>
  )
}
 export default Register