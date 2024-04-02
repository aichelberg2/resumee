import { TFunction } from 'i18next';
import Welcome from '../sidebar-pages/Welcome';
import HomeAutomation from '../sidebar-pages/HomeAutomation';
import School from '../sidebar-pages/School';
import DigitalLearning from '../sidebar-pages/DigitalLearning';
import CooperativeUniversity from '../sidebar-pages/CooperativeUniversity';
import GantrySystem from '../sidebar-pages/GantrySystem';
import ProductCatalog from '../sidebar-pages/ProductCatalog';
import WeldingGuns from '../sidebar-pages/WeldingGuns';
import Switzerland from '../sidebar-pages/Switzerland';

// type definitions

export type sidebarPageNameType =
  | 'Welcome'
  | 'School'
  | 'Cooperative State University'
  | 'Gantry System'
  | 'Product Catalog'
  | 'Welding Guns'
  | 'Digital Learning'
  | 'Home Automation'
  | 'Switzerland';

export type localeType = 'en' | 'de';

// constants

export const sidebarPageMap: { [ key in sidebarPageNameType ]: JSX.Element } = {
  'Welcome': <Welcome />,
  'School': <School />,
  'Cooperative State University': <CooperativeUniversity />,
  'Gantry System': <GantrySystem />,
  'Product Catalog': <ProductCatalog />,
  'Welding Guns': <WeldingGuns />,
  'Digital Learning': <DigitalLearning />,
  'Home Automation': <HomeAutomation />,
  'Switzerland': <Switzerland />,
};

export const sidebarPageIndexMap: { [ key in number ]: sidebarPageNameType } = {
  0: 'School',
  1: 'Cooperative State University',
  2: 'Gantry System',
  3: 'Product Catalog',
  4: 'Welding Guns',
  5: 'Digital Learning',
  6: 'Home Automation',
  7: 'Switzerland',
};

export const numPages = Object.keys(sidebarPageIndexMap).length;

export const transitionDurations: { [ key in number ]: number } = {
  0: 4,
  1: 6,
  2: 4,
  3: 3,
  4: 4,
  5: 6,
  6: 4,
  7: 6,
};

export const bigIcons = [
  'festo.png',
]

export const iconMap: { [ key in sidebarPageNameType ]: string[] } = {
  'Welcome': [
  ],
  'School': [
    'antme.png',
    'csharp-for-kids.jpg',
    'sia.png',
  ],
  'Cooperative State University': [
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

// functions

export const getPageIndexByName = (value: sidebarPageNameType): number => {
  for (const key in sidebarPageIndexMap)
    if (sidebarPageIndexMap.hasOwnProperty(key))
      if (sidebarPageIndexMap[ key ] === value)
        return parseInt(key);

  return -1;
}

export const getJsxFromString = (localeString: string, t: TFunction): JSX.Element =>
  <div className='content' dangerouslySetInnerHTML={{ __html: t(localeString) }} />

export const getImageFromSource = (source: string): JSX.Element =>
  <div className='image'>
    <img src={source} alt={source} />
  </div>