import Container from '../components/Container';

import { APP_NAME } from '../constants';

import TextField from '../components/TextField';

import PasswordField from '../components/PasswordField';

 const Register = () => {
  return (
    <>
      <Container  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
       Register with {APP_NAME}
       <TextField label="outlined"/>
       <TextField variant="filled" label="filled"/>
       <PasswordField label="Password"/>

      </Container>
    
    </>
  )
}
 export default Register