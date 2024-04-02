import { useTranslation } from 'react-i18next';
import NextButton from '../components/NextButton';
import Dashboard from '../components/demo/Dashboard';
import { getJsxFromString } from '../utils/MainUtils';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className='home-automation'>
      {getJsxFromString('private-p1', t)}
      <Dashboard />
      {getJsxFromString('private-p2', t)}
      <NextButton />
    </div >
  );
};

export default Welcome;