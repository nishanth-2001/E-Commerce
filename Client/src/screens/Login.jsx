import { useFormik } from "formik";

import Container from "../components/Container";

import { APP_NAME } from "../constants";

import Title from "../components/Title";
import TextField from "../components/TextField";

import LoginSchema from "../schemas/login";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <form
        style={{
          minWidth: "300px",
          width: "40%",
          marginTop: "30px",
        }}
        onSubmit={formik.handleSubmit}>
        <Title variant="h6" style={{ textAlign: "center" }}>
          Login with {APP_NAME}
        </Title>

        <TextField
          label="E-mail"
          style={{
            marginTop: "20px",
          }}
          name="email"
          value={formik.values.email}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          errorMessage={formik.touched.email && formik.errors.email}
          type="email"
          required
        />

        <PasswordField
          label="Password"
          style={{
            marginTop: "20px",
          }}
          required
          name="password"
          value={formik.values.password}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          errorMessage={formik.touched.password && formik.errors.password}
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "20px", marginBottom: "30px" }}>
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
