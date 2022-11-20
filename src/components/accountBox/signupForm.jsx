import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import validator from 'validator'
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
} from "./common";
import { AccountContext } from "./accountContext";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const regExp = /\b\d{9}\b/;
const mobileExp = /\b\d{10}\b/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3,"Please enter your real name")
    .required("Full Name is required"),
  regNumber: yup
    .number("Please enter a vaild Registration Number")
    .required("Registration Number is required"),
  regNumber: yup.string().matches(regExp, {message: 'Invalid Registration Number', excludeEmptyString: true}),
  mobileNumber:yup
    .number("Please enter a vaild Mobile Number")
    .required("Mobile Number is required"),
  mobileNumber: yup.string().matches(mobileExp, {message: 'Invalid Mobile Number', excludeEmptyString: true}),
  email:yup
    .string()
    .email("Please enter a vaild email address")
    .required("Email Address is required"),

});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const [values,setCredentials]=useState({ fullName:"",regNumber:"",mobileNumber:"",email:""})
  const onSubmit = async (values) => {
    const 
    { fullName,
      regNumber,
      mobileNumber,
      email } = values;
    const navigate = useNavigate();

    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({ fullName,regNumber,mobileNumber,email})
    });
    const json=await response.json()
    console.log(json);
    if(json.success){
      localStorage.setItem('token',json.regNumber);
      navigate("/");
    }
    else{
      alert("Invalid Credentials");
    }

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
      console.log(values)
      }
  }
  
  const formik = useFormik({
    initialValues: {
      fullName: "", 
      regNumber:"", 
      mobileNumber:"", 
      email: "",
    },
    validateOnBlur:true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("Error", error);


  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input 
            name="fullName" 
            type="text" 
            placeholder="Full Name" 
            value={formik.values.fullName} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.fullName && formik.errors.fullName 
            ? formik.errors.fullName
            : " "}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input 
            name="regNumber" 
            type="text" 
            maxLength={9} 
            placeholder="Registration Number" 
            value={formik.values.regNumber} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.regNumber && formik.errors.regNumber 
            ? formik.errors.regNumber
            : " "}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input 
            name="mobileNumber" 
            maxLength={10} 
            placeholder="Mobile Number" 
            value={formik.values.mobileNumber} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.mobileNumber && formik.errors.mobileNumber 
            ? formik.errors.mobileNumber
            : " "}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input 
            name="email" 
            type="e-mail"
            placeholder="E-Mail ID" 
            value={formik.values.email} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email 
            ? formik.errors.email
            : " "}
          </FieldError>
        </FieldContainer>
        <Marginer direction="vertical" margin={1} />
        <SubmitButton type="submit" href="#" disabled={!formik.isValid} onClick={switchToSignin}>Register</SubmitButton>
      </FormContainer>
      <Marginer direc tion="vertical" margin="1em" />
    </BoxContainer>
  );
}
