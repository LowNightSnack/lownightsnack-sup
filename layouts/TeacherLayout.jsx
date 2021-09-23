import Layout from "./Layout";

const TeacherLayout = ({ children, siteTitle }) => {
  return (
    <Layout siteTitle={siteTitle} showLogout={true}>
      {children}
    </Layout>
  );
};

export default TeacherLayout;
