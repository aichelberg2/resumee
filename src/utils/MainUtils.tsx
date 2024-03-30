import { TFunction } from 'i18next';

// type definitions

export type sidebarPageNameType =
  | 'Welcome'
  | 'School'
  | 'Cooperative University'
  | 'Gantry System'
  | 'Product Catalog'
  | 'Welding Guns'
  | 'Digital Learning'
  | 'Home Automation'
  | 'Switzerland';

export type localeType = 'en' | 'de';

// constants

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
  'Cooperative University': [
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

export const getJsxFromString = (localeString: string, t: TFunction): JSX.Element => {
  return <div className='content' dangerouslySetInnerHTML={{ __html: t(localeString) }} />
}