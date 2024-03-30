import { TFunction } from "i18next"

// type definitions

export type sidebarPageNameType =
  | "Welcome"
  | "School"
  | "University"
  | "Gantry System"
  | "Product Catalog"
  | "Welding Guns"
  | "Digital Learning"
  | "Home Automation"
  | "Switzerland";

export type localeType = "en" | "de";

// constants

export const contentFolder = '/resumee/';

// functions

export const getJsxFromString = (localeString: string, t: TFunction): JSX.Element => {
  return <div className='content' dangerouslySetInnerHTML={{ __html: t(localeString) }} />
}