import React, { useContext, useRef, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../../components/marginer"
import { AccountContext } from "./accountContext";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className='container d-flex align-items-center'>
        <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Username" ref={userNameRef}/>
            <Input type="password" placeholder="Password" ref={passwordRef} />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
            Already have an account?
            <BoldLink href="#" onClick={switchToSignin}>
            Signin
            </BoldLink>
        </MutedLink>
        </BoxContainer>
    </div>
  );
}