import React, { forwardRef } from 'react';
import './Header.css';
import { localeType, sidebarPageNameType } from '../App';
import { useTranslation } from 'react-i18next';
import i18n from '../locale/i18n';

interface HeaderProps {
  sidebarPageName: sidebarPageNameType;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuVisible: boolean;
  locale: localeType;
  setLocale: React.Dispatch<React.SetStateAction<localeType>>;
}

const iconMap: { [ key in sidebarPageNameType ]: string[] } = {
  'School': [
    '/resumee/dotnet.png',
    '/resumee/csharp.png',
    '/resumee/visual-studio.png',
  ],
  'University': [
    '/resumee/dotnet.png',
    '/resumee/csharp.png',
    '/resumee/visual-studio.png',
  ],
  'Gantry System': [
    '/resumee/dotnet.png',
    '/resumee/omnisharp.png',
    '/resumee/typescript.png',
  ],
  'Product Catalog': [
    '/resumee/dotnet.png',
    '/resumee/csharp.png',
    '/resumee/visual-studio.png',
  ],
  'Welding Guns': [
    '/resumee/dotnet.png',
    '/resumee/xunit.png',
    '/resumee/codebeamer.png',
  ],
  'Digital Learning': [
    '/resumee/dotnet.png',
    '/resumee/react.png',
    '/resumee/typescript.png',
  ],
  'Home Automation': [
    '/resumee/knx.png',
    '/resumee/node-red.png',
    '/resumee/linux.png',
  ],
  'Switzerland': [
    '/resumee/dotnet.png',
    '/resumee/csharp.png',
    '/resumee/visual-studio.png',
  ],
};

const Header: React.ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = (
  {
    sidebarPageName,
    isSidebarOpen,
    setIsSidebarOpen,
    isMenuVisible,
    locale,
    setLocale
  },
  ref
) => {
  const { t } = useTranslation();

  const onFullScreen = () => {
    const element = document.documentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }

  const switchLanguage = () => {
    const newLocale = locale === 'de' ? 'en' : 'de';
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
  }

  return (
    <div className={'header ' + (isMenuVisible ? '' : 'hidden')} ref={ref}>
      <div className='icon-container'>
        <div className='fullscreen controls' onClick={onFullScreen}>
          <img src='/resumee/fullscreen.svg' alt='fullscreen' />
        </div>
        <div className='locale controls' onClick={switchLanguage}>
          {locale === 'de' ?
            <img src='/resumee/de.svg' alt='de' />
            :
            <img src='/resumee/en.svg' alt='en' />
          }
        </div>
      </div>
      <div className='title'>
        {t(sidebarPageName)}
      </div>
      <div className='icon-container'>
        {iconMap[ sidebarPageName ].map((icon: string, index: number) => (
          <div className='icon' key={index}>
            <img src={icon} alt={sidebarPageName} />
          </div>
        ))}
      </div>
      <div
        className='sidebar-toggle'
        onClick={() => setIsSidebarOpen ? setIsSidebarOpen(!isSidebarOpen) : null}
      >
        {isSidebarOpen ? 'Less ▲' : 'More ▼'}
      </div>
    </div>
  );
};

export default forwardRef(Header);
