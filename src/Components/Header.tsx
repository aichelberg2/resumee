import React, { useEffect } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import i18n from '../locale/i18n';
import { useAtom } from 'jotai';
import { setHeaderRefAtom, isMenuVisibleAtom, isSidebarOpenAtom, localeAtom, sidebarPageNameAtom } from '../utils/MainStore';
import { contentFolder, sidebarPageNameType } from '../utils/MainUtils';

const bigIcons = [
  'festo.png',
]

const iconMap: { [ key in sidebarPageNameType ]: string[] } = {
  'Welcome': [
  ],
  'School': [
    'antme.png',
    'csharp-for-kids.jpg',
    'sia.png',
  ],
  'University': [
    'festo.png',
    'dhbw.png',
  ],
  'Gantry System': [
    'dotnet.png',
    'omnisharp.png',
    'typescript.png',
  ],
  'Product Catalog': [
    'dotnet.png',
    'csharp.png',
    'visual-studio.png',
  ],
  'Welding Guns': [
    'dotnet.png',
    'xunit.png',
    'codebeamer.png',
  ],
  'Digital Learning': [
    'dotnet.png',
    'react.png',
    'typescript.png',
  ],
  'Home Automation': [
    'knx.png',
    'node-red.png',
    'linux.png',
  ],
  'Switzerland': [
  ],
};

const Header = () => {
  const [ locale, setLocale ] = useAtom(localeAtom);
  const [ isSidebarOpen, setIsSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ isMenuVisible ] = useAtom(isMenuVisibleAtom);
  const [ sidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ , setHeaderRef ] = useAtom(setHeaderRefAtom);
  const ref = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setHeaderRef(ref);
  }, []);

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
          <img src={contentFolder + 'fullscreen.svg'} alt='fullscreen' />
        </div>
        <div className='locale controls' onClick={switchLanguage}>
          {locale === 'de' ?
            <img src={contentFolder + 'de.svg'} alt='de' />
            :
            <img src={contentFolder + 'en.svg'} alt='en' />
          }
        </div>
      </div>
      <div className='title'>
        {t(sidebarPageName)}
      </div>
      <div className='icon-container'>
        {iconMap[ sidebarPageName ].map((icon: string, index: number) => (
          <div className={'icon ' + (bigIcons.includes(icon) ? 'big' : '')} key={index}>
            <img src={contentFolder + icon} alt={sidebarPageName} />
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
