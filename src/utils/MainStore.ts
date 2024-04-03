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
export const sidebarRefAtom = atom<React.RefObject<HTMLDivElement> | null>(
  null
);
export const isLandscapeAtom = atom<boolean>(
  window.matchMedia("(orientation: landscape)").matches
);
export const breakpointAtom = atom<"sm" | "lg">("lg");
export const isDemoOpenAtom = atom<boolean>(false);

// actions

export const setHeaderRefAtom = atom(
  null,
  (_, set, ref: React.RefObject<HTMLDivElement>) => {
    set(headerRefAtom, ref);
  }
);

export const setSidebarRefAtom = atom(
  null,
  (_, set, ref: React.RefObject<HTMLDivElement>) => {
    set(sidebarRefAtom, ref);
  }
);

export const goToPageAtom = atom(
  null,
  (get, set, newIndex: number, timerIndex: number) => {
    setTimeout(() => {
      set(sidebarPageNameAtom, sidebarPageIndexMap[newIndex]);
      get(sidebarRefAtom)?.current?.scrollTo(0, 0);
    }, (transitionDurations[timerIndex] * 1000) / 2);

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
