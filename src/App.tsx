import './App.css';
import SplineRender from './components/SplineRender';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React, { useEffect, useRef } from 'react';

export type sidebarPageNameType = 'Welcome' | 'Gantry System' | 'Product Catalog' | 'Welding Guns' | 'Digital Learning' | 'Home Automation';

export const sidebarPageIndexMap: { [ key in number ]: sidebarPageNameType } = {
  0: 'Welcome',
  1: 'Gantry System',
  2: 'Product Catalog',
  3: 'Welding Guns',
  4: 'Digital Learning',
  5: 'Home Automation',
};

function App() {
  const [ sidebarPageName, setSidebarPageName ] = React.useState<sidebarPageNameType>('Digital Learning');
  const [ isSidebarOpen, setIsSidebarOpen ] = React.useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current && sidebarRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      sidebarRef.current.style.marginTop = `${headerHeight}px`;
      sidebarRef.current.style.height = `calc(100% - ${headerHeight}px)`;
    }
  }, [ headerRef.current, isSidebarOpen ]);

  return (
    <div className="resumee">
      {/* <SplineRender setSidebarPage={setSidebarPage} /> */}
      <Header sidebarPageName={sidebarPageName} ref={headerRef} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setSidebarPageName={setSidebarPageName} />
      <Sidebar sidebarPageName={sidebarPageName} ref={sidebarRef} isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default App;
