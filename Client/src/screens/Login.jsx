import Container from "../components/Container";

import { APP_NAME } from "../constants";

import PhoneNumberInput from "../components/PhoneNumber";
import Title from "../components/Title";

const Login = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <form
        style={{
          minWidth: "300px",
          width: "40%",
          marginTop: "30px",
        }}>
        <Title variant="h6" style={{ textAlign: "center" }}>
          Login with {APP_NAME}
        </Title>

        <PhoneNumberInput 
        label="PhoneNumber" 
        />
      </form>
    </Container>
  );
};

export default Login;
