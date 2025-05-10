import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import { useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [print, setPrint] = useState('');

  const handleType = (type) => {
    setType(type);
  }

  const handleColor = (color) => {
    setColor(color);
  }

  const handlePrint = (print) => {
    setPrint(print)
  }

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={type} color={color} print={print} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup onTypeChange={handleType} onColorChange={handleColor} onPrintChange={handlePrint}/>
        </div>
      </div>
    </div>
  );
};
