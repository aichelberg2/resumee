import { Application } from "@splinetool/runtime";
import { atom } from "jotai";
import {
  localeType,
  numPages,
  sidebarPageIndexMap,
  sidebarPageNameType,
  transitionDurations,
} from "./MainUtils";

export const isSidebarOpenAtom = atom<boolean>(true);
export const sidebarPageNameAtom = atom<sidebarPageNameType>("Welcome");
export const isMenuVisibleAtom = atom<boolean>(true);
export const localeAtom = atom<localeType>("en");
export const isLoadingAtom = atom<boolean>(true);
export const splineRefAtom = atom<Application | null>(null);
export const headerRefAtom = atom<React.RefObject<HTMLDivElement> | null>(null);

// actions

export const setHeaderRefAtom = atom(
  null,
  (_, set, ref: React.RefObject<HTMLDivElement>) => {
    set(headerRefAtom, ref);
  }
);

export const goToPageAtom = atom(
  null,
  (_, set, newIndex: number, timerIndex: number) => {
    setTimeout(() => {
      set(sidebarPageNameAtom, sidebarPageIndexMap[newIndex]);
    }, 1000);

    setTimeout(() => {
      set(isMenuVisibleAtom, true);
      set(isSidebarOpenAtom, true);
    }, transitionDurations[timerIndex] * 1000);
  }
);

export const goToNextPageAtom = atom(null, (_, set, pageIndex: number) => {
  set(goToPageAtom, (pageIndex + 1) % numPages, pageIndex);
});

export const goToPreviousPageAtom = atom(null, (_, set, pageIndex: number) => {
  const newIndex = (pageIndex - 1 + numPages) % numPages;
  set(goToPageAtom, newIndex, newIndex);
});
