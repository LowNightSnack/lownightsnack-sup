import Layout from "./Layout";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import useVerify from "../libs/swrHooks/useVerify";
import { redirect } from "../libs/utils";
import Cookies from "js-cookie";
import { addError } from "../redux/actions";
import { assignErrorMessage } from "../libs/loginUtils";
import Spinner from "../components/Spinner";

const sidenavLinks = [
  { url: "/users/login", text: "Login" },
  { url: "/users/test", text: "Test" },
  { url: "#1", text: "BrokenLink1" },
  { url: "#2", text: "BrokenLink2" },
  { url: "#3", text: "BrokenLink3" },
];

const StudentLayout = ({ children, siteTitle }) => {
  const dispatch = useDispatch();
  const { verifyError, verifyLoading, verifyMutate } = useVerify();

  useEffect(() => {
    if (!verifyLoading && verifyError) {
      dispatch(addError(assignErrorMessage(verifyError)));
      redirect("/users/login");
    }
  }, [verifyError, verifyLoading]);

  const handleLogout = useCallback(() => {
    Cookies.remove("accessToken");
    verifyMutate(null);
  });

  if (verifyLoading || verifyError) return <Spinner />;

  return (
    <Layout
      siteTitle={siteTitle}
      onLogout={handleLogout}
      sidenavLinks={sidenavLinks}
    >
      {children}
    </Layout>
  );
};

export default StudentLayout;
