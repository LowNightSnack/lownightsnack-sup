import Overlay from "./common/Overlay";
const SidebarOverlay = ({ extendSidebarBool, extendSidebar }) => {
  let sidebarOverlayClasses =
    "bg-black opacity-0 transition-opacity duration-200";
  if (extendSidebarBool)
    sidebarOverlayClasses += " opacity-50 pointer-events-auto";
  return (
    <Overlay onClickEvent={extendSidebar} className={sidebarOverlayClasses} />
  );
};

export default SidebarOverlay;
