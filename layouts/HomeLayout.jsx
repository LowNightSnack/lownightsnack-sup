import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DynamicScrollbar = dynamic(
  () => import("../components/common/Scrollbar"),
  {
    ssr: false,
  }
);

const HomeLayout = ({ children, siteTitle }) => {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <div className="flex flex-col h-full w-full overflow-hidden">
        <DynamicScrollbar>
          <div className="text-xl">{children}</div>
        </DynamicScrollbar>
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
