import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleTextHandler = () => {
    setShowParagraph((prevShowParagraph) => !showParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is Toggle Text</p>}
      <Button onClick={toggleTextHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
