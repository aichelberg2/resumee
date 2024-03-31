import './ControlButton.css';
import { useAtom } from 'jotai';
import { isMenuVisibleAtom, isSidebarOpenAtom, sidebarPageNameAtom, splineRefAtom } from '../utils/MainStore';
import { getPageIndexByName, numPages, sidebarPageIndexMap } from '../utils/MainUtils';
import { useTranslation } from 'react-i18next';

const NextButton = () => {
  const [ , setIsMenuVisible ] = useAtom(isMenuVisibleAtom);
  const [ , setIsSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ sidebarPageName, setSidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ splineRef ] = useAtom(splineRefAtom);
  const { t } = useTranslation();

  const onNext = () => {
    if (!splineRef)
      return;

    const thisSplineIndex = getPageIndexByName(sidebarPageName) + 1;
    const newIndex = thisSplineIndex % numPages;
    splineRef.emitEvent('mouseDown', 'Next ' + thisSplineIndex);

    setIsMenuVisible(false);
    setIsSidebarOpen(false);

    setTimeout(() => {
      setSidebarPageName(sidebarPageIndexMap[ newIndex ]);
      setIsMenuVisible(true)
      setIsSidebarOpen(true);
    }, 5000);
  };
  return (
    <div className='menu-control'>
      <button onClick={onNext}>
        {t('next')}
      </button>
    </div>
  );
}

export default NextButton;