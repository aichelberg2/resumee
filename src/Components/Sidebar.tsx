import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import Welcome from '../sidebar-pages/Welcome';
import HomeAutomation from '../sidebar-pages/HomeAutomation';
import { useAtom } from 'jotai';
import { headerRefAtom, isMenuVisibleAtom, isSidebarOpenAtom, sidebarPageNameAtom } from '../utils/MainStore';
import { sidebarPageNameType } from '../utils/MainUtils';

const Sidebar = () => {
  const [ sidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ isSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ headerRef ] = useAtom(headerRefAtom);
  const [ isMenuVisible ] = useAtom(isMenuVisibleAtom);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const sidebarPageMap: { [ key in sidebarPageNameType ]: JSX.Element } = {
    'Welcome': <Welcome />,
    'School': <HomeAutomation />,
    'University': <HomeAutomation />,
    'Home Automation': <HomeAutomation />,
    'Gantry System': <HomeAutomation />,
    'Product Catalog': <HomeAutomation />,
    'Welding Guns': <HomeAutomation />,
    'Digital Learning': <HomeAutomation />,
    'Switzerland': <HomeAutomation />,
  };

  const updateSidebarHeight = () => {
    if (headerRef && headerRef.current && sidebarRef.current) {
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
