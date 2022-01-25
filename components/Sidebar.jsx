import dynamic from "next/dynamic";
import CustomLink from "./common/CustomLink";

const DynamicScrollbar = dynamic(() => import("./common/Scrollbar"), {
  ssr: false,
});

const Sidebar = ({ extendSidebarBool, sidenavLiks = [] }) => {
  let sidebarClasses =
    "sidebar z-50 bg-blue-800 top-14 w-64 lg:w-80 text-blue-100 md:top-0 flex-shrink-0 md:sticky space-y-6  absolute inset-y-0 left-0 md:relative md:translate-x-0 transition duration-200 ease-in-out";
  if (!extendSidebarBool) sidebarClasses += " transform -translate-x-full";
  return (
    <>
      <div className={sidebarClasses}>
        <DynamicScrollbar>
          <div className="py-4 px-2">
            <nav>
              {sidenavLiks.map((link) => (
                <CustomLink
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                  key={link.url}
                  linkHref={link.url}
                  linkText={link.text}
                />
              ))}
            </nav>
          </div>
        </DynamicScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
