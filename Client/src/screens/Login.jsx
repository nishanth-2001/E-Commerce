import Container from '../components/Container';

import { APP_NAME } from '../constants';

import PhoneNumberInput from '../components/PhoneNumber';

const Login = () => {
    return (
        <Container  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Register with {APP_NAME} 
        <PhoneNumberInput label="PhoneNumber" />
        
        </Container>
    )
}

export default Login