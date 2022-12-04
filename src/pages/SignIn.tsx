import {
  Email,
  ForgotPassword,
  Form,
  Heading,
  InputGroup,
  Label,
  Password,
  SignInContent,
  SignInLinkHome,
  Submit,
} from "../styled/SignIn";

const SignIn = () => {
  return (
    <SignInContent>
      <SignInLinkHome to="/">Home</SignInLinkHome>
      <Form>
        <Heading>Sign in to your account</Heading>
        <InputGroup>
          <Label>Email</Label>
          <Email />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Password />
        </InputGroup>
        <Submit type="submit" value="Continue" />
        <ForgotPassword href="#">Forgot password</ForgotPassword>
      </Form>
    </SignInContent>
  );
};

export default SignIn;
