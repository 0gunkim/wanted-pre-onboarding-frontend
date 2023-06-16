import React, { useEffect, useRef, useState } from "react";
import Button from "../components/common/ui/Button";
import { useNavigate } from "react-router-dom";
import { vaildEmail, validPassword } from "../components/common/util/vaild";
import { SIGN_IN } from "../service/api/api";
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const refFocus = useRef();

  const data = {
    email: email,
    password: password,
  };
  const loginSubmit = async (e) => {
    console.log("com", data);
    e.preventDefault();
    SIGN_IN(JSON.stringify(data));
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
    setIsPassword(isVaildPassword);
  };

  useEffect(() => {
    if (isEmail === true && isPassword === true) {
      return setIsDisable(false);
    }
    refFocus.current.focus();
  }, [isEmail, isPassword]);
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
          ref={refFocus}
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
      <Button test_id={"signin"} label={"로그인"} disabled={isDisable} />
      <Button label={"회원가입하기"} type={"button"} onClick={moveSignUp} />
    </form>
  );
}
