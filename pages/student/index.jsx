import StudentLayout from "../../layouts/StudentLayout";
import ShimmerLoader from "../../components/common/ShimmerLoader";
import useVerify from "../../libs/swrHooks/useVerify";
const siteTitle = "Student | Dashboard";

const Student = () => {
  const { verifyUser, verifyMutate } = useVerify();

  return (
    <StudentLayout siteTitle={siteTitle}>
      <p>
        Lorem ipsum epsilon knot Lorem ipsum epsilon knot{" "}
        {verifyUser && verifyUser.username}
      </p>
      <button
        onClick={() => {
          verifyMutate();
        }}
      >
        frick
      </button>
    </StudentLayout>
  );
};

export default Student;
