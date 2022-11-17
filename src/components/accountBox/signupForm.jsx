import React, { useContext } from "react";
import validator from 'validator'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" id="name" placeholder="Full Name" />
        <Input type="text" id="reg" maxLength={9} placeholder="Registration Number" />
        <Input type="mobile-nuumber" id="mobile" maxLength={10} placeholder="Mobile Number" />
        <Input type="e-mail" id="email" placeholder="E-Mail ID" />
      </FormContainer>
      <Marginer direction="vertical" margin={20} />
      <SubmitButton type="submit" href="#" onClick={switchToSignin}>Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
