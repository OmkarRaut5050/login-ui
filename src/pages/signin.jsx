import React from "react";

import { Switch } from "@mui/material";

import {
  Container,
  TopCard,
  InputField,
  BottomCard,
  RemembermeContainer,
  SignInButton,
  Footer,
  Title,
  IconWrapper,
  Icon,
} from "./signin.styles";

const Signin = () => {
  return (
    <Container>
      <TopCard>
        <Title>
          <h2>Sign In</h2>
        </Title>
        <IconWrapper>
          <Icon>
            <i class="fa-brands fa-facebook-f"></i>
          </Icon>
          <Icon>
            <i class="fa-brands fa-github"></i>
          </Icon>
          <Icon>
            <i class="fa-brands fa-google"></i>
          </Icon>
        </IconWrapper>
      </TopCard>
      <BottomCard>
        <InputField>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Passsword" />
        </InputField>
        <RemembermeContainer>
          <Switch />
          <span>Remember me</span>
        </RemembermeContainer>
        <SignInButton>
          <h5>SIGN IN</h5>
        </SignInButton>
        <Footer>
          <span>
            Don't have an account? <a href="#">Sign up</a>
          </span>
        </Footer>
      </BottomCard>
    </Container>
  );
};

export default Signin;
