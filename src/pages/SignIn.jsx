import React, { useEffect, useState } from "react";
import Button from "../components/common/ui/Button";
import { useNavigate } from "react-router-dom";
import { vaildEmail, validPassword } from "../components/common/util/vaild";
export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const data = {
    email: email,
    password: password,
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const emailHandle = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const isVaildEmail = vaildEmail(inputValue);
    setIsEmail(isVaildEmail);
  };
  const passwordHandle = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    const isVaildPassword = validPassword(inputValue);
    console.log(isVaildPassword);
    setIsPassword(isVaildPassword);
  };

  const moveSignUp = () => {
    navigate("/signup");
  };
  return (
    <form onSubmit={loginSubmit}>
      <label htmlFor="email_input">
        <span>E-mail :</span>
        <input
          data-testid="email-input"
          id="email_input"
          onChange={emailHandle}
          autoComplete="email"
        />
      </label>
      <label htmlFor="password_input">
        <span>Password :</span>
        <input
          type="password"
          data-testid="password-input"
          id="password_input"
          onChange={passwordHandle}
          autoComplete="password"
        />
      </label>
      <Button
        test_id={"signin-button"}
        label={"로그인"}
        disabled={!isPassword}
      />
      <Button label={"회원가입하기"} type={"button"} onClick={moveSignUp} />
    </form>
  );
}
