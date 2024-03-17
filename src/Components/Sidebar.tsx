import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  content: JSX.Element;
}

const Sidebar: React.FC<SidebarProps> = ({ content }) => {
  return (
    <div className="sidebar">
      {content}
    </div>
  );
};

export default Sidebar;