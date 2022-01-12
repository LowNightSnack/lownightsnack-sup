import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoginLayout from "../../layouts/LoginLayout";
import CustomLink from "../../components/common/CustomLink";
import LoginForm from "../../components/LoginForm";
import useVerify from "../../libs/swrHooks/useVerify";
import Spinner from "../../components/Spinner";
import { login } from "../../libs/auth";
import {
  addError,
  clearErrors,
  addWarning,
  clearWarnings,
} from "../../redux/actions";
import {
  assignErrorMessage,
  validateLoginRequest,
  validateLoginResponse,
} from "../../libs/loginUtils";
import { redirect } from "../../libs/utils";

const siteTitle = "'Sup? | Login";
const inputFields = [
  {
    name: "username",
    label: "Username",
    type: "text",
    required: true,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
  },
];

const Login = () => {
  const [highlightObject, setHighlightObject] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  const { verifyUser, verifyLoading, verifyError, verifyMutate } = useVerify();
  const dispatch = useDispatch();

  const preLoginCleanup = useCallback(() => {
    Cookies.remove("accessToken");
    dispatch(clearErrors());
    dispatch(clearWarnings());
    setHighlightObject({});
  });

  const onLogin = async (event) => {
    event.preventDefault();
    preLoginCleanup();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const warnings = validateLoginRequest(username, password);
    if (warnings) setHighlightObject(warnings);
    else
      try {
        setLoginLoading(true);
        const result = await login(username, password);
        setLoginLoading(false);
        const errors = validateLoginResponse(result);
        if (errors) setHighlightObject(errors);
        else {
          Cookies.set("accessToken", result.token);
          verifyMutate(null);
        }
      } catch (e) {
        dispatch(addError(assignErrorMessage(e)));
      }
  };

  useEffect(() => {
    if (highlightObject) {
      if (highlightObject.warnings) {
        highlightObject.messages.forEach((message) => {
          dispatch(addWarning(message));
        });
      } else if (highlightObject.errors) {
        highlightObject.messages.forEach((message) => {
          dispatch(addError(message));
        });
      }
    }
  }, [highlightObject]);

  useEffect(() => {
    if (verifyUser) {
      if (verifyUser.type === "student") redirect("/student");
      else if (verifyUser.type === "teacher") redirect("/teacher");
      else if (verifyUser.type === "admin") redirect("/admin");
      else dispatch(addError("Severe Security flaw found?"));
    }
  }, [verifyUser]);

  if (!verifyLoading && !verifyUser)
    return (
      <LoginLayout siteTitle={siteTitle}>
        <div className="h-full flex flex-col items-center bg-gray-200 justify-center">
          <LoginForm
            onLogin={onLogin}
            highlightObject={highlightObject}
            inputFields={inputFields}
            loginLoading={loginLoading}
          />
          <nav>
            <CustomLink linkHref="/" linkText="home" />{" "}
            <CustomLink linkHref="/student" linkText="student" />{" "}
            <CustomLink linkHref="/teacher" linkText="teacher" />{" "}
            <CustomLink linkHref="/dashboard" linkText="dashboard" />{" "}
          </nav>
        </div>
      </LoginLayout>
    );
  return <Spinner />;
};

export default Login;
