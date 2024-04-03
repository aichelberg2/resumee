import React from 'react';
import './SwitchAllButtons.css';

interface SwitchAllButtonsProps {
  onToggle: (isOn: boolean) => void;
  isLightVisible: boolean;
}

const SwitchAllButtons: React.FC<SwitchAllButtonsProps> = ({ onToggle, isLightVisible }) => {
  const lampOffSrc = 'lamp-off.svg';
  const lampOnSrc = 'lamp-on.svg';
  const blindDownSrc = 'blind-down.svg';
  const blindUpSrc = 'blind-up.svg';

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
