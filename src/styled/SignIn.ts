import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "./utilities";

const SignInContent = styled.div`
  background: var(--color-primary);
  height: 100vh;
  padding: var(--padding-base);
  color: var(--color-light);
`;

const SignInLinkHome = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
  transition: all 0.15s;
  &:hover {
    color: var(--color-text);
  }
`;

const Form = styled.form`
  background: var(--color-dark);
  max-width: 420px;
  padding: 7rem 3rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 320px) {
    padding: 7rem 1rem;
  }
`;

const Heading = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Email = styled.input`
  ${Input};
`;

const Password = styled.input`
  ${Input};
`;

const Submit = styled.input`
  background: var(--color-primary);
  color: var(--color-light);
  padding: 1rem;
  border-radius: 7px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;
  &:hover {
    background: var(--color-primary-dark);
  }
`;

const ForgotPassword = styled.a`
  transition: all 0.15s;
  text-align: center;
  &:hover {
    color: var(--color-text);
  }
`;

export {
  SignInContent,
  SignInLinkHome,
  Form,
  Heading,
  InputGroup,
  Label,
  Email,
  Password,
  Submit,
  ForgotPassword,
};
