import React from 'react';
import Spline, { SplineEvent } from '@splinetool/react-spline';
import './SplineRender.css';
import { Application } from '@splinetool/runtime';
import { useAtom } from 'jotai';
import { isLoadingAtom, isMenuVisibleAtom, isSidebarOpenAtom, sidebarPageNameAtom, splineRefAtom } from '../utils/MainStore';
import { sidebarPageNameType } from '../utils/MainUtils';

const sidebarPageIndexMap: { [ key in number ]: sidebarPageNameType } = {
  0: 'School',
  1: 'University',
  2: 'Gantry System',
  3: 'Product Catalog',
  4: 'Welding Guns',
  5: 'Digital Learning',
  6: 'Home Automation',
  7: 'Switzerland',
};

const transitionDurations: { [ key in number ]: number } = {
  0: 4,
  1: 6,
  2: 4,
  3: 3,
  4: 4,
  5: 4,
  6: 4,
  7: 6,
};

const SplineRender = () => {
  const [ , setSidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ , setIsMenuVisible ] = useAtom(isMenuVisibleAtom);
  const [ , setIsSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ , setIsLoading ] = useAtom(isLoadingAtom);
  const [ , setSplineRef ] = useAtom(splineRefAtom);

  const numPages = Object.keys(sidebarPageIndexMap).length;

  const onLoad = (splineApp: Application) => {
    setSplineRef(splineApp);

    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }

  const onMouseDown = (event: SplineEvent) => {
    const targetName = event.target.name;
    setIsMenuVisible(false);
    setIsSidebarOpen(false);

    let newIndex = 0;
    let pageIndex = 0;
    let timerIndex = 0;

    const getCurrentStation = (move: string) => {
      return parseInt(targetName.charAt(move.length)) - 1;
    }

    if (targetName.includes('Previous ')) {
      pageIndex = getCurrentStation('Previous ');
      newIndex = (pageIndex - 1 + numPages) % numPages;
      timerIndex = newIndex;
    }
    else if (targetName.includes('Next ')) {
      pageIndex = getCurrentStation('Next ');
      newIndex = (pageIndex + 1) % numPages;
      timerIndex = pageIndex;
    }
    else {
      return;
    }

    setTimeout(() => {
      setSidebarPageName(sidebarPageIndexMap[ newIndex ]);
      setIsMenuVisible(true)
      setIsSidebarOpen(true);
    }, transitionDurations[ timerIndex ] * 1000);
  };

  return (
    <div className='spline'>
      <Spline
        scene='https://prod.spline.design/pRIHRNXN4BzzYFVF/scene.splinecode'
        onLoad={(e) => onLoad(e)}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

export default SplineRender;