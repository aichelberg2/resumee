import { Application } from "@splinetool/runtime";
import { atom } from "jotai";
import { localeType, sidebarPageNameType } from "./MainUtils";

export const isSidebarOpenAtom = atom<boolean>(true);
export const sidebarPageNameAtom = atom<sidebarPageNameType>("Welcome");
export const isMenuVisibleAtom = atom<boolean>(true);
export const localeAtom = atom<localeType>("en");
export const isLoadingAtom = atom<boolean>(true);
export const splineRefAtom = atom<Application | null>(null);
export const headerRefAtom = atom<React.RefObject<HTMLDivElement> | null>(null);
export const setHeaderRefAtom = atom(
  null,
  (get, set, ref: React.RefObject<HTMLDivElement>) => {
    set(headerRefAtom, ref);
  }
);
