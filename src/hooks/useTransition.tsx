import { RefObject, useCallback, useEffect, useState } from "react";

function useTransition(
  ref: RefObject<HTMLInputElement | HTMLImageElement | HTMLLIElement>,
  animation: string,
) {
  // const [isVisible, setVisible] = useState(true);

  // useEffect(() => {
  //   const element = ref.current as Element;
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(element);

  //   return () => observer.unobserve(element);
  // });

  // useEffect(() => {
  //   if (isVisible) {
  //     ref.current?.classList.add(`animate-${animation}`);
  //     ref.current?.classList.remove("opacity-0");
  //   } else {
  //     ref.current?.classList.remove(`animate-${animation}`);
  //     ref.current?.classList.add("opacity-0");
  //   }
  // }, [animation, isVisible, ref]);

  const [isInView, setIsInView] = useState(false);
  const [seen, setSeen] = useState(false);

  const checkInView = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  }, [ref]);

  useEffect(() => {
    checkInView();
  }, [checkInView]);

  useEffect(() => {
    document.addEventListener("scroll", checkInView);
    return () => {
      document.removeEventListener("scroll", checkInView);
    };
  }, [checkInView]);

  useEffect(() => {
    if (!seen && isInView) {
      ref.current?.classList.add(`animate-${animation}`);
      ref.current?.classList.remove("opacity-0");
      setSeen(true);
    }
  }, [seen, isInView, animation, ref]);
}

export default useTransition;
