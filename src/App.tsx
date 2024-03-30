import './App.css';
import SplineRender from './components/SplineRender';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/i18n';
import { localeAtom } from './utils/MainStore';
import { useAtom } from 'jotai';
import { localeType } from './utils/MainUtils';

function App() {
  const [ , setLocale ] = useAtom(localeAtom);

  useEffect(() => {
    setLocale(i18n.language as localeType)
  }, [ setLocale ]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className='resumee'>
        <SplineRender />
        <Header />
        <Sidebar />
      </div>
    </I18nextProvider>
  );
}

export default App;