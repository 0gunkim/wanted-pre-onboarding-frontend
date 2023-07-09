import React, { useEffect, useRef, useState } from "react";
import Button from "../components/common/ui/Button";
import Layout from "../components/common/Layout";
import { useNavigate } from "react-router-dom";
import { SIGN_UP } from "../service/api/api";
import {
  vaildEmail,
  validPassword,
} from "../components/common/util/vaild/vaild";
export default function SignUp() {
  //TODO
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [isPassword, setIsPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const navigate = useNavigate();
  const refFocus = React.createRef<HTMLInputElement>();

  const data = {
    email: email,
    password: password,
  };
  const signUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await SIGN_UP(data);
    if (response?.status === 201) {
      navigate("/");
    } else {
      alert("서버와 연결이 원할하지 않습니다");
    }
  };
  const emailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const isVaildEmail = vaildEmail(inputValue);
    setIsEmail(isVaildEmail);
  };
  const passwordHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    const isVaildPassword = validPassword(inputValue);
    setIsPassword(isVaildPassword);
  };
  useEffect(() => {
    if (isEmail === true && isPassword === true) {
      return setIsDisable(false);
    }
    refFocus.current?.focus();
  }, [isEmail, isPassword]);
  return (
    <Layout>
      <form
        className="flex-col flex gap-5 mx-auto mt-[120px] "
        onSubmit={signUpSubmit}
      >
        <div className="flex-col flex gap-4 items-center mb-10 ">
          <label className="flex flex-row gap-7" htmlFor="email_input">
            <span>E-mail </span>
            <input
              data-testid="email-input"
              id="email_input"
              onChange={emailHandle}
              autoComplete="off"
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
              autoComplete="password"
            />
          </label>
        </div>
        <Button test_id={"signup"} label={"회원가입"} disabled={isDisable} />
      </form>
    </Layout>
  );
}
