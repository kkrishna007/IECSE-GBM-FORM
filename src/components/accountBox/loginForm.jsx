import React, { useContext } from "react";
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
import { Ticket } from './Ticket'


export default function LoginForm(props) {
  // const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>

      <Ticket/>
    </BoxContainer>
  );
}
