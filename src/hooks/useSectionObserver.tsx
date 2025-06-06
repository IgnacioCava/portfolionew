import navbarTabs from "@lib/navbarTabs";
import type { AvailableTabs } from "@types";
import { useEffect, useMemo, useRef } from "react";

const useSectionObserver = (
  callback: (AvailableTabs: AvailableTabs) => void,
  lastClickedAt: number
) => {
  const lastClicked = useRef(lastClickedAt);

  useEffect(() => {
    lastClicked.current = lastClickedAt;
  }, [lastClickedAt]);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver !== "undefined")
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              Date.now() - lastClicked.current > 1000
            ) {
              callback(`#${entry.target.id}` as AvailableTabs);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.4,
        }
      );
    else return null;
  }, [callback]);

  useEffect(() => {
    navbarTabs.forEach((tag) => {
      const element = document.querySelector(tag.hash);
      if (!element) return;
      observer?.observe(element);
    });
  }, [observer]);
};

export default useSectionObserver;
