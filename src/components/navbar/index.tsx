import { useSelectedTabPosition } from "@hooks";
import useSectionObserver from "@hooks/useSectionObserver";
import navbarTabs from "@lib/navbarTabs";
import type { AvailableTabs } from "@types";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<AvailableTabs>(
    navbarTabs[0].hash
  );
  const [lastClickedAt, setLastClickedAt] = useState(0);
  useSectionObserver(setSelectedTab, lastClickedAt);

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const position = useSelectedTabPosition(tabRefs, selectedTab);

  return (
    <div
      className={S.NavbarContainer}
      style={assignInlineVars({
        [S.selectedTabOffsetTop]: position.top,
        [S.selectedTabOffsetLeft]: position.left,
        [S.selectedTabOffsetWidth]: position.width,
        [S.selectedTabText]: `"${selectedTab}"`,
      })}
    >
      {navbarTabs.map((tab, index) => (
        <a href={"/" + tab.hash} draggable={false}>
          <div
            key={tab.hash}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={S.NavbarItem({ selected: tab.hash === selectedTab })}
            onClick={() => {
              setSelectedTab(tab.hash);
              setLastClickedAt(Date.now());
            }}
          >
            {t(`component.navbar.${tab.name}`)}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
