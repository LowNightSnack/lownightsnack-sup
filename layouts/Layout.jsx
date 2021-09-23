import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import SidebarOverlay from "../components/SidebarOverlay";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const DynamicScrollbar = dynamic(
  () => import("../components/common/Scrollbar"),
  {
    ssr: false,
  }
);

const Layout = ({
  children,
  siteTitle,
  onLogout = null,
  sidenavLinks = [],
}) => {
  const [extendSidebarBool, setExtendSidebarBool] = useState(false);

  const handleExtendSidebar = useCallback(() => {
    setExtendSidebarBool(!extendSidebarBool);
  });

  return (
    <>
      <Header siteTitle={siteTitle} />
      <SidebarOverlay
        extendSidebarBool={extendSidebarBool}
        extendSidebar={handleExtendSidebar}
      />
      <div className="main-view-wrapper h-full w-full flex flex-row overflow-hidden absolute">
        <Sidebar
          extendSidebarBool={extendSidebarBool}
          sidenavLiks={sidenavLinks}
        />
        <div className="overflow-hidden flex flex-col h-full w-full">
          <Navbar extendSidebar={handleExtendSidebar} onLogout={onLogout} />
          <DynamicScrollbar>
            <div className="p-10 text-2xl font-bold">{children}</div>
          </DynamicScrollbar>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
