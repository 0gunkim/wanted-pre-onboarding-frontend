import React, { useEffect, useRef, useState } from "react";
import Button from "../components/common/ui/Button";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../service/api/api";
import Layout from "../components/common/Layout";
import {
  vaildEmail,
  validPassword,
} from "../components/common/util/vaild/vaild";

export default function SignIn() {
  const navigate = useNavigate();
  //TODO
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isStatus, setStatus] = useState(false);
  const refFocus = React.createRef<HTMLInputElement>();
  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await SIGN_IN(JSON.stringify(data));
      if (response?.status === 200) {
        setStatus(true);
        return navigate("/todo", { replace: true });
      }
    } catch (error) {
      console.log(error);
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

  const moveSignUp = () => {
    navigate("/signup");
  };
  useEffect(() => {
    if (isStatus) {
      navigate("/todo", { replace: true });
    }
  }, [isStatus]);

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
              autoComplete="new-password"
            />
          </label>
        </div>
        <Button test_id={"signin"} label={"로그인"} disabled={isDisable} />
        <Button label={"회원가입하기"} type={"button"} onClick={moveSignUp} />
      </form>
    </Layout>
  );
}
