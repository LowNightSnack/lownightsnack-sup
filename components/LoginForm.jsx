import { useCallback, useEffect, useState } from "react";
import FormInput from "./common/FormInput";
import LoadingSpinner from "./common/LoadingSpinner";

const LoginForm = ({
  onLogin,
  highlightObject = {},
  inputFields = [],
  loginLoading,
}) => {
  const [warnFields, setWarnFields] = useState([]);
  const [errorFields, setErrorFields] = useState([]);

  useEffect(() => {
    let highlightFields = [];
    inputFields.forEach((field) => {
      highlightObject[field.name] && highlightFields.push(field.name);
    });
    if (highlightObject.warnings) {
      setWarnFields(highlightFields);
    } else if (highlightObject.errors) {
      setErrorFields(highlightFields);
    }
  }, [highlightObject]);

  const removeHightlight = (name) => {
    setWarnFields(warnFields.filter((field) => field != name));
    setErrorFields(errorFields.filter((field) => field != name));
  };
  const handleWarn = useCallback(
    (name) => {
      return warnFields.indexOf(name) != -1;
    },
    [warnFields]
  );
  const handleError = useCallback(
    (name) => {
      return errorFields.indexOf(name) != -1;
    },
    [errorFields]
  );
  const handleLogin = useCallback(
    (event) => {
      setWarnFields([]);
      setErrorFields([]);
      return onLogin(event);
    },
    [onLogin]
  );
  return (
    <form
      className="flex flex-col bg-white p-6 rounded-md space-y-7 shadow"
      onSubmit={handleLogin}
    >
      {inputFields.map((field) => (
        <FormInput
          key={field.name}
          {...field}
          warn={handleWarn(field.name)}
          error={handleError(field.name)}
          removeHighlight={() => removeHightlight(field.name)}
        />
      ))}
      <div className="flex justify-center">
        <button
          className={`flex justify-center p-2 w-20 bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-md${
            loginLoading ? " pointer-events-none bg-opacity-70" : ""
          }`}
          type="submit"
        >
          {loginLoading ? (
            <LoadingSpinner />
          ) : (
            <>
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
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
