import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/DemoOutput/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleTextHandler = () => {
    setShowParagraph((prevShowParagraph) => !showParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={toggleTextHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
