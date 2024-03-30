import { useEffect, useRef } from 'react';
import './Sidebar.css';
import Welcome from '../sidebar-pages/Welcome';
import HomeAutomation from '../sidebar-pages/HomeAutomation';
import { useAtom } from 'jotai';
import { headerRefAtom, isMenuVisibleAtom, isSidebarOpenAtom, sidebarPageNameAtom } from '../utils/MainStore';
import { sidebarPageNameType } from '../utils/MainUtils';
import School from '../sidebar-pages/School';
import DigitalLearning from '../sidebar-pages/DigitalLearning';
import CooperativeUniversity from '../sidebar-pages/CooperativeUniversity';
import GantrySystem from '../sidebar-pages/GantrySystem';
import ProductCatalog from '../sidebar-pages/ProductCatalog';
import WeldingGuns from '../sidebar-pages/WeldingGuns';
import Switzerland from '../sidebar-pages/Switzerland';

const Sidebar = () => {
  const [ sidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ isSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ headerRef ] = useAtom(headerRefAtom);
  const [ isMenuVisible ] = useAtom(isMenuVisibleAtom);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const sidebarPageMap: { [ key in sidebarPageNameType ]: JSX.Element } = {
    'Welcome': <Welcome />,
    'School': <School />,
    'Cooperative University': <CooperativeUniversity />,
    'Gantry System': <GantrySystem />,
    'Product Catalog': <ProductCatalog />,
    'Welding Guns': <WeldingGuns />,
    'Digital Learning': <DigitalLearning />,
    'Home Automation': <HomeAutomation />,
    'Switzerland': <Switzerland />,
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
  });

  return (
    <div className={'sidebar ' + ((isSidebarOpen && isMenuVisible) ? '' : 'hidden')} ref={sidebarRef}>
      {sidebarPageMap[ sidebarPageName ]}
    </div>
  );
};

export default Sidebar;
