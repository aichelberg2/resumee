import React, { useState } from 'react';
import './Toggle.css';

interface ToggleProps {
  onToggle: (isOn: boolean) => void;
  setIsLightVisible: (isLightVisible: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ onToggle, setIsLightVisible }) => {
  const [ isOn, setIsOn ] = useState(false);

  const offSrc = '/resumee/lamp-on.svg';
  const onSrc = '/resumee/blind-down.svg';

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle(isOn);
    setIsLightVisible(isOn);
  };

  return (
    <div className='toggleContainer' onClick={toggleSwitch}>
      <div className={`circle ${isOn ? 'circleOn' : ''}`} />
      <img src={offSrc} className={`icon ${!isOn ? 'iconVisible' : ''}`} alt='Off' />
      <img src={onSrc} className={`icon ${isOn ? 'iconVisible' : ''}`} alt='On' />
    </div>
  );
};

export default Toggle;
