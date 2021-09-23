const Overlay = ({
  className = null,
  onClickEvent = false,
  children = null,
}) => {
  if (onClickEvent)
    return (
      <div
        onClick={() => onClickEvent()}
        className={`fixed block top-14 right-0 bottom-0 left-0 z-10 pointer-events-none ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    );
  else
    return (
      <div
        className={`fixed block top-14 right-0 bottom-0 left-0 z-10 pointer-events-none ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    );
};

export default Overlay;
