import { useEffect, useRef } from 'react';
import './Sidebar.css';
import { useAtom } from 'jotai';
import { headerRefAtom, isMenuVisibleAtom, isSidebarOpenAtom, setSidebarRefAtom, sidebarPageNameAtom } from '../utils/MainStore';
import { sidebarPageMap } from '../utils/MainUtils';

const Sidebar = () => {
  const [ sidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ isSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ headerRef ] = useAtom(headerRefAtom);
  const [ isMenuVisible ] = useAtom(isMenuVisibleAtom);
  const [ , setSidebarRef ] = useAtom(setSidebarRefAtom);
  const ref = useRef<HTMLDivElement>(null);

  const updateSidebarHeight = () => {
    if (headerRef && headerRef.current && ref.current) {
      const headerHeight = headerRef.current.offsetHeight;
      ref.current.style.marginTop = `${headerHeight}px`;
      ref.current.style.height = `calc(100% - ${headerHeight}px)`;
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

  useEffect(() => {
    setSidebarRef(ref);
  }, [ setSidebarRef ]);

  return (
    <div className={'sidebar ' + ((isSidebarOpen && isMenuVisible) ? '' : 'hidden')} ref={ref}>
      {sidebarPageMap[ sidebarPageName ]}
    </div>
  );
};

export default Sidebar;
