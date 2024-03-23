import React, { useEffect, useRef } from "react";
import "./Sidebar.css";
import { sidebarPageNameType } from "../App";
import Welcome from "../descriptions/Welcome";
import HomeAutomation from "../descriptions/HomeAutomation";

interface SidebarProps {
  sidebarPageName: sidebarPageNameType;
  isSidebarOpen: boolean;
  headerRef: React.RefObject<HTMLDivElement>;

}

const sidebarPageMap: { [ key in sidebarPageNameType ]: JSX.Element } = {
  'Home Automation': <HomeAutomation />,
  'Gantry System': <Welcome />,
  'Product Catalog': <Welcome />,
  'Welding Guns': <Welcome />,
  'Digital Learning': <Welcome />,
  'Welcome': <Welcome />
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarPageName, isSidebarOpen, headerRef }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current && sidebarRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      sidebarRef.current.style.marginTop = `${headerHeight}px`;
      sidebarRef.current.style.height = `calc(100% - ${headerHeight}px)`;
    }
  }, [ headerRef, isSidebarOpen ]);

  return (
    <div className={'sidebar ' + (isSidebarOpen ? '' : 'hidden')} ref={sidebarRef}>
      {sidebarPageMap[ sidebarPageName ]}
    </div>
  );
};

export default Sidebar;
