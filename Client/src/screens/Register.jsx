import { useFormik } from "formik";

import Container from "../components/Container";

import { APP_NAME, COUNTRY_CODE, ROUTES } from "../constants";

import TextField from "../components/TextField";
import PasswordField from "../components/PasswordField";
import RadioBtn from "../components/RadioBtn";
import PhoneNumber from "../components/PhoneNumber";
import Title from "../components/Title";
import Button from "../components/Button";
import RegistrationSchema from "../schemas/register";
import { fetcher } from "../utils";

import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Register = () => {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const [nameError, setNameError] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      gender: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: async (formValue) => {
      const payload = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        password: formValue.password,
        phoneNumber: {
          number: formValue.phoneNumber.toString(),
          code: COUNTRY_CODE,
        },
        gender: formValue.gender,
      };

      const { err, message } = await fetcher(
        ROUTES.API.AUTH.REGISTER,
        "POST",
        payload
      );

      if (err) {
        alert(message);
      } else {
        setSuccess("Register is Successful.THANK YOU..");
        setOpen(true);
      }
    },
  });

  //alert("error")
  // 1.first name length less than or equal 3 throw error "Invalid First Name"
  // 2.last name length less than or equal 3 throw error "Invalid Last Name"(should not throw error if empty)
  // 3.password length less than 8 throw error "Invalid Password"
  // 4.password is not equal to confirm password throw error "Invalid Confirm Password"
  // 5.phone number length not equal to 10 throw error "Invalid phone number"
  // 6.phone number not starts with 6,7,8,9 throw error "invalid phone number"
  // 7. gender is empty throw error "invalid gender"
  // 8. validate email(how to validate email in js) - "invalid email"

  return (
    <>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <form
          style={{
            minWidth: "300px",
            width: "40%",
            marginTop: "30px",
          }}
          onSubmit={formik.handleSubmit}>
          <Title
            variant="h6"
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}>
            Register with {APP_NAME}
          </Title>
          <div style={{ display: "flex" }}>
            <TextField
              label="First Name"
              style={{
                marginRight: "10px",
              }}
              name="firstName"
              value={formik.values.firstName}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              errorMessage={formik.touched.firstName && formik.errors.firstName}
              required
            />

            <TextField
              label="Last Name"
              style={{
                marginLeft: "10px",
              }}
              name="lastName"
              value={formik.values.lastName}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              errorMessage={
                formik.touched.lastNameName && formik.errors.lastName
              }
            />
          </div>
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
          <PasswordField
            label="Confirm Password"
            style={{
              marginTop: "20px",
            }}
            required
            name="confirmPassword"
            value={formik.values.confirmPassword}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            errorMessage={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <PhoneNumber
            label="Phone Number"
            style={{
              marginTop: "20px",
            }}
            required
            name="phoneNumber"
            value={formik.values.phoneNumber}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            errorMessage={
              formik.touched.phoneNumber && formik.errors.phoneNumber
            }
          />
          <RadioBtn
            label="Gender"
            alignHorizontal
            value={formik.values.gender}
            style={{
              marginTop: "20px",
            }}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "others", value: "others" },
            ]}
            name="gender"
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            errorMessage={formik.touched.gender && formik.errors.gender}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              type="submit"
              style={{ marginTop: "20px", marginBottom: "30px" }}>
              Register
            </Button>
          </div>
        </form>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={success}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{ backgroundColor: "green", color: "white" }}
      />
    </>
  );
};
export default Register;
