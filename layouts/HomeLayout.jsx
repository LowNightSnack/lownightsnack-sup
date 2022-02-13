import dynamic from "next/dynamic";
import Header from "../components/Header";

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
      <div className="h-screen w-full overflow-hidden">
        <div className="scroll-snap-y h-screen overflow-auto scrollbar-background">
          {children}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
