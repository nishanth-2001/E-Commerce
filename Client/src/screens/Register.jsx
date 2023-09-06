import Container from "../components/Container";

import { APP_NAME } from "../constants";

import TextField from "../components/TextField";
import PasswordField from "../components/PasswordField";
import RadioBtn from "../components/RadioBtn";
import PhoneNumber from "../components/PhoneNumber";
import Title from "../components/Title";
import Button from "../components/Button";

import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

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
          onSubmit={(e) => {
            e.preventDefault();
            //alert("error")
            //1.first name length less than or equal 3- "Invalid First Name"
            //2.last name length less than or equal 3- "Invalid Last Name"(should throw error if empty)
            //3.password length less than 8 -"Invalid Password"
            //4.password is not equal to confirm password -"Invalid Confirm Password"
            //5.phone number length not equal to 10 "Invalid phone number"
            //6.phone number not starts with 6,7,8,9 -"invalid phone number"
            //7. gender is empty - "invalid gender"
            //8. validate email(how to validate email in js) - "invalid email"
          }}>
          <Title
            variant="h6"
            style={{
              textAlign: "center",
            }}>
            Register with {APP_NAME}
          </Title>
          <div style={{ display: "flex" }}>
            <TextField
              label="First Name"
              style={{
                marginRight: "10px",
                marginBottom: "20px",
              }}
              value={firstName}
              handleChange={(e) => setFirstName(e.target.value)}
              required
            />

            <TextField
              label="Last Name"
              style={{
                marginLeft: "10px",
              }}
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <TextField
            label="E-mail"
            style={{
              marginTop: "20px",
            }}
            value={email}
            type="email"
            required
            handleChange={(e) => setEmail(e.target.value)}
          />

          <PasswordField
            label="Password"
            style={{
              marginTop: "20px",
            }}
            value={password}
            required
            handleChange={(e) => setPassword(e.target.value)}
          />
          <PasswordField
            label="Confirm Password"
            style={{
              marginTop: "20px",
            }}
            value={confirmPassword}
            required
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <PhoneNumber
            label="Phone Number"
            style={{
              marginTop: "20px",
            }}
            value={phoneNumber}
            required
            handleChange={(e) => setPhoneNumber(e.target.value)}
          />
          <RadioBtn
            label="Gender"
            alignHorizontal
            value={gender}
            style={{
              marginTop: "20px",
            }}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "others", value: "others" },
            ]}
            handleChange={(e) => setGender(e.target.value)}
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
    </>
  );
};
export default Register;
