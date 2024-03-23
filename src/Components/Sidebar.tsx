import React, { forwardRef } from "react";
import "./Sidebar.css";
import { sidebarPageNameType } from "../App";
import Welcome from "../descriptions/Welcome";
import HomeAutomation from "../descriptions/HomeAutomation";

interface SidebarProps {
  sidebarPageName: sidebarPageNameType;
  isSidebarOpen: boolean;
}

const sidebarPageMap: { [ key in sidebarPageNameType ]: JSX.Element } = {
  'Home Automation': <HomeAutomation />,
  'Gantry System': <Welcome />,
  'Product Catalog': <Welcome />,
  'Welding Guns': <Welcome />,
  'Digital Learning': <Welcome />,
  'Welcome': <Welcome />
};

const Sidebar: React.ForwardRefRenderFunction<HTMLDivElement, SidebarProps> = ({ sidebarPageName, isSidebarOpen }, ref) => {
  return (
    <div className={'sidebar ' + (isSidebarOpen ? '' : 'hidden')} ref={ref}>
      {sidebarPageMap[ sidebarPageName ]}
    </div>
  );
};

export default forwardRef(Sidebar);
