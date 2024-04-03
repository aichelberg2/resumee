import { useTranslation } from 'react-i18next';
import NextButton from '../components/NextButton';
import { getImageFromSource, getJsxFromString } from '../utils/MainUtils';
import { isDemoOpenAtom } from '../utils/MainStore';
import { useAtom } from 'jotai';

const Welcome = () => {
  const [ , setIsDemoOpen ] = useAtom(isDemoOpenAtom);
  const { t } = useTranslation();


  return (
    <div className='home-automation'>
      {getJsxFromString('private-p1', t)}
      <div className='clickable' onClick={() => setIsDemoOpen(true)}>
        {getImageFromSource('house-control.png')}
      </div>
      {getJsxFromString('private-p2', t)}
      <NextButton />
    </div >
  );
};

export default Welcome;