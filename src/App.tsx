import React from 'react';
import './App.css';
import CanvasPorsche from './components/canvas/canvas';
import ColorPicker from './components/color-picker/color-picker';

function App() {
  return (
    <div style={{width:"100%", height:"100%"}}>
      <CanvasPorsche></CanvasPorsche>
      <ColorPicker/>
    </div>
  );
}

export default App;
