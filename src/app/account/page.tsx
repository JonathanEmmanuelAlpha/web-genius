import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import Activation from "./Activation";

export const LINKS = {
  login: "login",
  signup: "signup",
  activation: "activation",
  forgotPass: "forgot-password",
};

export default function Page({
  searchParams,
}: {
  searchParams: { action: string };
}) {
  return (
    <>
      {searchParams.action === LINKS.login && <Login />}
      {searchParams.action === LINKS.signup && <Register />}
      {searchParams.action === LINKS.activation && <Activation />}
      {searchParams.action === LINKS.forgotPass && <ForgotPassword />}
    </>
  );
}
