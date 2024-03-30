import './App.css';
import SplineRender from './components/SplineRender';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React, { useRef } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/i18n';

export type sidebarPageNameType = 'School' | 'University' | 'Gantry System' | 'Product Catalog' | 'Welding Guns' | 'Digital Learning' | 'Home Automation' | 'Switzerland';
export type localeType = 'en' | 'de';

function App() {
  const [ isSidebarOpen, setIsSidebarOpen ] = React.useState<boolean>(false);
  const [ sidebarPageName, setSidebarPageName ] = React.useState<sidebarPageNameType>('School');
  const [ isMenuVisible, setIsMenuVisible ] = React.useState<boolean>(true);
  const [ locale, setLocale ] = React.useState<localeType>(i18n.language as localeType);
  const [ onInitialLoad, setOnInitialLoad ] = React.useState<boolean>(true);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <I18nextProvider i18n={i18n}>
      <div className='resumee'>
        <SplineRender setSidebarPageName={setSidebarPageName} setIsMenuVisible={setIsMenuVisible} setIsSidebarOpen={setIsSidebarOpen} />
        <Header sidebarPageName={sidebarPageName} ref={headerRef} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isMenuVisible={isMenuVisible} locale={locale} setLocale={setLocale} />
        <Sidebar sidebarPageName={sidebarPageName} isSidebarOpen={isSidebarOpen} headerRef={headerRef} isMenuVisible={isMenuVisible} />
      </div>
    </I18nextProvider>
  );
}

export default App;