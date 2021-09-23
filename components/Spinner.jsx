import Header from "./Header";
const siteTitle = "Loading...";
const Spinner = () => {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </>
  );
};

export default Spinner;
