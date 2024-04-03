import Spline, { SplineEvent } from '@splinetool/react-spline';
import './SplineRender.css';
import { Application } from '@splinetool/runtime';
import { useAtom } from 'jotai';
import { goToNextPageAtom, goToPreviousPageAtom, isLoadingAtom, isMenuVisibleAtom, isSidebarOpenAtom, splineRefAtom } from '../utils/MainStore';

const SplineRender = () => {
  const [ , setIsMenuVisible ] = useAtom(isMenuVisibleAtom);
  const [ , setIsSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ , setIsLoading ] = useAtom(isLoadingAtom);
  const [ , setSplineRef ] = useAtom(splineRefAtom);
  const [ , goToPreviousPage ] = useAtom(goToPreviousPageAtom);
  const [ , goToNextPage ] = useAtom(goToNextPageAtom);

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

    const getCurrentStation = (direction: string) =>
      parseInt(targetName.charAt(direction.length)) - 1;

    if (targetName.includes('Previous '))
      goToPreviousPage(getCurrentStation('Previous '));
    else if (targetName.includes('Next '))
      goToNextPage(getCurrentStation('Next '));
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