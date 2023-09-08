import { useEffect, useState } from "react";
import "./handleShadowOnScroll.css";

const handleShadowOnScroll = (scrollRef: any, isOpen: boolean) => {
  const [scrollTop, setScrollTop] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (scrollRef?.current) {
      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
      const scrollBottom = scrollTop + clientHeight + 1 >= scrollHeight;
      setScrollTop(scrollTop ? true : false);
      setScrollBottom(scrollBottom ? true : false);
    }
  };
  useEffect(() => {
    if (scrollRef?.current?.clientHeight < scrollRef?.current?.scrollHeight) {
      setScroll(true);
    }
    scrollRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrollTop(false);
  }, [isOpen]);

  scrollRef?.current?.parentNode?.classList.toggle(
    "inte-shadow__top",
    scrollTop && scroll
  );
  scrollRef?.current?.parentNode?.classList.toggle(
    "inte-shadow__bottom",
    !scrollBottom && scroll
  );
};

export default handleShadowOnScroll;
