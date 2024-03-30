import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import { sidebarPageNameType } from '../App';
import Welcome from '../sidebar-pages/Welcome';
import HomeAutomation from '../sidebar-pages/HomeAutomation';

interface SidebarProps {
  sidebarPageName: sidebarPageNameType;
  isSidebarOpen: boolean;
  headerRef: React.RefObject<HTMLDivElement>;
  isMenuVisible: boolean;
}

const sidebarPageMap: { [ key in sidebarPageNameType ]: JSX.Element } = {
  'School': <Welcome />,
  'University': <Welcome />,
  'Home Automation': <HomeAutomation />,
  'Gantry System': <Welcome />,
  'Product Catalog': <Welcome />,
  'Welding Guns': <Welcome />,
  'Digital Learning': <Welcome />,
  'Switzerland': <Welcome />,
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarPageName, isSidebarOpen, headerRef, isMenuVisible }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const updateSidebarHeight = () => {
    if (headerRef.current && sidebarRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      sidebarRef.current.style.marginTop = `${headerHeight}px`;
      sidebarRef.current.style.height = `calc(100% - ${headerHeight}px)`;
    }
  };

  useEffect(() => {
    updateSidebarHeight();

    const handleResize = () => {
      updateSidebarHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ headerRef, isSidebarOpen ]);

  return (
    <div className={'sidebar ' + ((isSidebarOpen && isMenuVisible) ? '' : 'hidden')} ref={sidebarRef}>
      {sidebarPageMap[ sidebarPageName ]}
    </div>
  );
};

export default Sidebar;
