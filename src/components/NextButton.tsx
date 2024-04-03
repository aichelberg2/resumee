import './ControlButton.css';
import { useAtom } from 'jotai';
import { goToNextPageAtom, sidebarPageNameAtom, splineRefAtom } from '../utils/MainStore';
import { getPageIndexByName } from '../utils/MainUtils';
import { useTranslation } from 'react-i18next';

const NextButton = () => {
  const [ , goToNextPage ] = useAtom(goToNextPageAtom);
  const [ sidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ splineRef ] = useAtom(splineRefAtom);
  const { t } = useTranslation();

  const onNext = () => {
    if (!splineRef)
      return;

    const thisSplineIndex = getPageIndexByName(sidebarPageName) + 1;
    splineRef.emitEvent('mouseDown', 'Next ' + thisSplineIndex);
    goToNextPage(thisSplineIndex - 1);
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