import React, { useEffect, useRef, useState } from "react";
import Button from "../components/common/ui/Button";
import { redirect, useNavigate } from "react-router-dom";
import {
  vaildEmail,
  validPassword,
} from "../components/common/util/vaild/vaild";
import { SIGN_IN } from "../service/api/api";
import Layout from "../components/common/Layout";
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const refFocus = useRef();
  const isToken = localStorage.getItem("access_token");

  const loginSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const response = await SIGN_IN(JSON.stringify(data));
    if (response.status === 200) {
      navigate("/todo", { replace: true });
    } else {
      console.log("서버와 통신이 어렵습니다");
    }
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
  // useEffect(() => {
  //   console.log(typeof isToken);
  //   if (typeof isToken === String) {
  //     redirect("/todo");
  //   }
  // }, [isToken]);
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
    <Layout>
      <form
        className="flex-col flex gap-5 mx-auto mt-[120px] "
        onSubmit={loginSubmit}
      >
        <div className="flex-col flex gap-4 items-center mb-10 ">
          <label className="flex flex-row gap-7" htmlFor="email_input">
            <span className="">E-mail </span>
            <input
              className=""
              data-testid="email-input"
              id="email_input"
              onChange={emailHandle}
              autoComplete="email"
              ref={refFocus}
            />
          </label>
          <label htmlFor="password_input">
            <span>Password </span>
            <input
              type="password"
              data-testid="password-input"
              id="password_input"
              onChange={passwordHandle}
              autoComplete="on"
            />
          </label>
        </div>
        <Button test_id={"signin"} label={"로그인"} disabled={isDisable} />
        <Button label={"회원가입하기"} type={"button"} onClick={moveSignUp} />
      </form>
    </Layout>
  );
}
