import React, { useEffect } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import i18n from '../locale/i18n';
import { useAtom } from 'jotai';
import { setHeaderRefAtom, isMenuVisibleAtom, isSidebarOpenAtom, localeAtom, sidebarPageNameAtom } from '../utils/MainStore';
import { bigIcons, iconMap, localeType } from '../utils/MainUtils';

const Header = () => {
  const [ locale, setLocale ] = useAtom(localeAtom);
  const [ isSidebarOpen, setIsSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ isMenuVisible ] = useAtom(isMenuVisibleAtom);
  const [ sidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ , setHeaderRef ] = useAtom(setHeaderRefAtom);
  const ref = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setLocale(i18n.language as localeType)
  }, [ i18n.language ]);

  useEffect(() => {
    setHeaderRef(ref);
  }, [ setHeaderRef ]);

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
          <img src={'fullscreen.svg'} alt='fullscreen' />
        </div>
        <div className='locale controls' onClick={switchLanguage}>
          {locale === 'de' ?
            <img src={'de.svg'} alt='de' />
            :
            <img src={'en.svg'} alt='en' />
          }
        </div>
      </div>
      <div className='title'>
        {t(sidebarPageName)}
      </div>
      <div className='icon-container'>
        {iconMap[ sidebarPageName ].map((icon: string, index: number) => (
          <div className={'icon ' + (bigIcons.includes(icon) ? 'big' : '')} key={index}>
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

export default Header;
