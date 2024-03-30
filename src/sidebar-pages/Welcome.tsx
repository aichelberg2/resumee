import { useTranslation } from 'react-i18next';
import { getJsxFromString } from '../utils/MainUtils';
import { useAtom } from 'jotai';
import { isLoadingAtom, isMenuVisibleAtom, isSidebarOpenAtom, sidebarPageNameAtom, splineRefAtom } from '../utils/MainStore';

const Welcome = () => {
  const [ , setIsMenuVisible ] = useAtom(isMenuVisibleAtom);
  const [ , setIsSidebarOpen ] = useAtom(isSidebarOpenAtom);
  const [ , setSidebarPageName ] = useAtom(sidebarPageNameAtom);
  const [ isLoading ] = useAtom(isLoadingAtom);
  const [ splineRef ] = useAtom(splineRefAtom);

  const { t } = useTranslation();

  const onPlay = () => {
    if (!splineRef)
      return;

    splineRef.emitEvent('keyDown', 'Camera Group');

    setIsMenuVisible(false);
    setIsSidebarOpen(false);

    setTimeout(() => {
      setSidebarPageName('School');
      setIsMenuVisible(true)
      setIsSidebarOpen(true);
    }, 5000);
  };

  return (
    <div className='welcome'>
      <div className='image-with-text'>
        {getJsxFromString('welcome-p1', t)}
        <div className='image'>
          <img src={'portrait.jpg'} alt='Portrait' />
        </div>
      </div>
      {getJsxFromString('welcome-p2', t)}
      <div className='play'>
        <button disabled={isLoading} onClick={onPlay}>
          {(isLoading ? t('loading') : t('play'))}
        </button>
      </div>
    </div>
  );
};

export default Welcome;