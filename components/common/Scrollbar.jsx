import React, { useState, useCallback, useEffect, useRef } from "react";

const SCROLL_BOX_MIN_HEIGHT = 20;
const Scrollbar = ({ children, className, setHeight, ...props }) => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const [resize, setResize] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(1);

  const handleDocumentMouseUp = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
      return;
    },
    [isDragging]
  );

  const handleDocumentMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        const scrollHostElement = scrollHostRef.current;
        const { scrollHeight, offsetHeight } = scrollHostElement;

        let deltaY = e.clientY - lastScrollThumbPosition;
        let percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(
            Math.max(0, scrollBoxTop + deltaY),
            offsetHeight - scrollBoxHeight
          )
        );
        scrollHostElement.scrollTop = Math.min(
          scrollHostElement.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
  );

  const handleScrollThumbMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement = scrollHostRef.current;
    const { scrollTop, offsetHeight } = scrollHostElement;
    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, [clientHeight, scrollBoxHeight]);

  const scrollHostRef = useRef();

  const resizeObserver = useRef(
    new ResizeObserver(() => {
      if (!resize) setResize(true);
    })
  );

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement;
    setClientHeight(clientHeight);
    setScrollHeight(scrollHeight);
    handleScroll();
    setResize(false);
  }, [resize, handleScroll]);

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    const scrollThumbPercentage = clientHeight / scrollHeight;
    if (scrollThumbPercentage !== 1) {
      setShowScrollbar(true);
      const scrollThumbHeight = Math.max(
        scrollThumbPercentage * clientHeight,
        SCROLL_BOX_MIN_HEIGHT
      );
      setScrollBoxHeight(scrollThumbHeight);
      scrollHostElement.addEventListener("scroll", handleScroll, true);
    } else {
      setShowScrollbar(false);
    }
    return function cleanup() {
      scrollHostElement.removeEventListener("scroll", handleScroll, true);
    };
  }, [clientHeight, scrollHeight, handleScroll]);

  useEffect(() => {
    //this is handle the dragging on scroll-thumb
    const scrollHostElement = scrollHostRef.current;
    resizeObserver.current.observe(scrollHostElement);
    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("mouseup", handleDocumentMouseUp);
    document.addEventListener("mouseleave", handleDocumentMouseUp);
    return function cleanup() {
      resizeObserver.current.unobserve(scrollHostElement);
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("mouseup", handleDocumentMouseUp);
      document.removeEventListener("mouseleave", handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <div className="scrollbar-wrapper h-full relative overflow-hidden ">
      <div
        ref={scrollHostRef}
        className="overflow-auto h-full scrollbar-width-none mr-4"
        {...props}
      >
        {children}
      </div>
      <div
        className={`scrollbar w-3 h-full right-0 bottom-0 bg-transparent absolute ${
          !showScrollbar ? "hidden" : ""
        }`}
      >
        <div
          className={
            "scrollthumb w-2 h-5 mx-0.5 rounded-lg top-0 absolute bg-black bg-opacity-40"
          }
          style={{ height: scrollBoxHeight, top: scrollBoxTop }}
          onMouseDown={handleScrollThumbMouseDown}
        />
      </div>
    </div>
  );
};

export default Scrollbar;
