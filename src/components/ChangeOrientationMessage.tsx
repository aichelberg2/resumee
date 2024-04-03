import { useAtom } from "jotai";
import { isLandscapeAtom } from "../utils/MainStore";
import './ControlButton.css'
import './ChangeOrientationMessage.css'
import { useTranslation } from "react-i18next";

const ChangeOrientationMessage = () => {
  const [ , setIsLandscape ] = useAtom(isLandscapeAtom);
  const { t } = useTranslation();

  return (
    <div className='change-orientation-message menu-control'>
      <h2>{t('please-rotate')}</h2>
      <button onClick={() => setIsLandscape(true)}>
        {t('continue-anyway')}
      </button>
    </div>
  );
};

export default ChangeOrientationMessage;