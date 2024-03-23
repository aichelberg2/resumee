import './App.css';
import SplineRender from './components/SplineRender';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React, { useRef } from 'react';

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
  const [ isSidebarOpen, setIsSidebarOpen ] = React.useState<boolean>(false);
  const [ sidebarPageName, setSidebarPageName ] = React.useState<sidebarPageNameType>('Home Automation');
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="resumee">
      {/* <SplineRender setSidebarPage={setSidebarPage} /> */}
      <Header sidebarPageName={sidebarPageName} ref={headerRef} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setSidebarPageName={setSidebarPageName} />
      <Sidebar sidebarPageName={sidebarPageName} isSidebarOpen={isSidebarOpen} headerRef={headerRef} />
    </div>
  );
}

export default App;
