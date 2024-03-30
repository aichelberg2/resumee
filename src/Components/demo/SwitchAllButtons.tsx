import React from 'react';
import './SwitchAllButtons.css';
import { contentFolder } from '../../utils/MainUtils';

interface SwitchAllButtonsProps {
  onToggle: (isOn: boolean) => void;
  isLightVisible: boolean;
}

const SwitchAllButtons: React.FC<SwitchAllButtonsProps> = ({ onToggle, isLightVisible }) => {
  const lampOffSrc = contentFolder + 'lamp-off.svg';
  const lampOnSrc = contentFolder + 'lamp-on.svg';
  const blindDownSrc = contentFolder + 'blind-down.svg';
  const blindUpSrc = contentFolder + 'blind-up.svg';

  return (
    <div className='all-button-container'>
      <button className='all-button off' onClick={() => onToggle(false)}>
        <img className='all-icon' src={isLightVisible ? lampOffSrc : blindDownSrc} alt='Switch' />
      </button>
      <button className='all-button on' onClick={() => onToggle(true)}>
        <img className='all-icon' src={isLightVisible ? lampOnSrc : blindUpSrc} alt='Switch' />
      </button>
    </div>
  );
};

export default SwitchAllButtons;
