import navbarTabs from "@lib/navbarTabs";
import { useEffect, useState } from "react";
import type { AvailableTabs } from "@types";
import { useTranslation } from "react-i18next";

const useSelectedTabPosition = (
  tabRefs: React.RefObject<(HTMLDivElement | null)[]>,
  selectedTab: AvailableTabs
) => {
  const { i18n } = useTranslation();
  const [position, setPosition] = useState({
    top: "0px",
    left: "0px",
    width: "0px",
  });

  useEffect(() => {
    const index = navbarTabs.findIndex((tab) => tab.hash === selectedTab);
    const selectedEl = tabRefs.current[index];
    if (selectedEl) {
      const { offsetTop, offsetLeft, offsetWidth } = selectedEl;
      setPosition({
        top: `${offsetTop}px`,
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [tabRefs, selectedTab, i18n.language]);

  return position;
};

export default useSelectedTabPosition;
