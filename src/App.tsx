import './App.css';
import SplineRender from './components/SplineRender';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/i18n';
import ChangeOrientationMessage from './components/ChangeOrientationMessage';
import { useAtom } from 'jotai';
import { isLandscapeAtom } from './utils/MainStore';
import { useEffect } from 'react';
import Dashboard from './components/demo/Dashboard';

function App() {
  const [ isLandscape, setIsLandscape ] = useAtom(isLandscapeAtom);

  useEffect(() => {
    const handleOrientationChange = (event: MediaQueryListEvent) => {
      setIsLandscape(event.matches);
    };

    const mediaQueryList = window.matchMedia("(orientation: landscape)");
    mediaQueryList.addListener(handleOrientationChange);

    return () => {
      mediaQueryList.removeListener(handleOrientationChange);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className='resumee'>
        {isLandscape ? (
          <div>
            <Dashboard />
            <SplineRender />
            <Header />
            <Sidebar />
          </div>
        ) : (
          <ChangeOrientationMessage />
        )
        }
      </div>
    </I18nextProvider>
  );

}

export default App;