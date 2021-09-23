import useVerify from "../libs/swrHooks/useVerify";

const Test1 = () => {
  const obj = { username: "frick", password: "frick" };
  const { verifyUser, verifyError, verifyLoading } = useVerify(obj);
  return <h1>bleh, {!verifyLoading ? verifyUser : "..."}</h1>;
};

export default Test1;
