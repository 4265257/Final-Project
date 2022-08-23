import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { Image } from "cloudinary-react";

const SignUpForm = () => {

  return (
    <SignInArea>
    <ImageArea>
      <Image
        /*               style={{
          height: 200,
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
        }} */
        cloudName="yarabrek"
        publicId="https://res.cloudinary.com/yarabrek/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1661124936/244652455_397101501860902_8121952241494557297_n_vmoxti.jpg
        "
        />
    </ImageArea>
        <SignUpInput>

    <>
      <Form 
      //onSubmit={handleSubmit}
      >
        <FormTitle>Sign up to GardenHelper</FormTitle>
        <Label>
          First Name
          <Input type="text" name="fName" required />
        </Label>
        <Label>
          Last Name
          <Input type="text" name="lName" required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
   {/*    {success && (
        <Error> Congrats! successfully signed up. Visit signin page.</Error>
      )}
      {error && <Error>User already exist. Go to Signin page</Error>} */}
    </>

        </SignUpInput>
        </SignInArea>
);
};

const SignInArea = styled.div`
 // position: relative;
 margin-left:auto;
  margin-right:auto;
  margin-top: 50px;
  width: fit-content;
  background: #f7f7f7 ;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const ImageArea = styled.div`
/*   width: fit-content;
  border: solid black 2px;
  border-radius: 5px;
  margin: 10px; */
  `;
const SignUpInput = styled.div`
`
const LinkSignUp = styled(Link)`
margin-top: 10px ;
`
const Wrapper = styled.div`
  margin-top: 10px;
`;
const FormSelection = styled.button`
  border-radius: 5px;
  margin: 5px;
  font-size: medium;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  background-color: var(--secondary-color);
  &.active {
    background-color: transparent;
    cursor: default;
  }
  `;
const FormTitle = styled.h2`
  border-bottom: 1px solid lightgray;
  text-align: center;
  margin: 0 20px;
  padding: 10px;
  font-size: 25px;
`;
const Error = styled.div`
  color: red;
  padding: 5px;
  margin: 15px;
  margin-left: 5rem;
  font-size: 18px;
  `;

const Input = styled.input`
  margin-left: 5px;
  margin-top: 10px;
  font-size: 20px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  display: block;
  `;
const SubmitButton = styled.button`
  margin-left: 5px;
  margin-top: 10px;
  padding: 5px;
  font-size: 20px;
  background-color: var(--secondary-color);
  border-radius: 8px;
  display: block;
  padding: 8px;
  `;
const Label = styled.label`
  margin-top: 10px;
  font-size: 17px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: var(--primary-color);
  border-radius: 5px;
  margin: auto;
  padding: 0 0 50px 0;
  `;
const Form = styled.form`
  margin-left:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export default SignUpForm;
{/* 
        <Form
         //onSubmit={handleSignin}
         >
      <FormTitle>Sign in</FormTitle>
      <Label>
        Email
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" required />
      </Label>
      <Input
        style={{ backgroundColor: "#e0edf4", border: "none", padding: 5 }}
        type="submit"
      />
                <LinkSignUp to={`/signUp`}>
   or sign up 
        </LinkSignUp>
    </Form> */}