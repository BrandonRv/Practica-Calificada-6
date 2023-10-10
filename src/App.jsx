import './App.css'
import rayas from "../images/pattern-divider-desktop.svg"
import React, { useState } from 'react';


function App() {

  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');


  const loadAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      });
  };

  const handleButtonClick = () => {
    loadAdvice();
  };

  return (
    <>
<div className="cv-container">
<div className="cv-header">
  <br></br>
<small className='title1'>ADVICE #{adviceId}</small>
<p className='p1'>{`"${advice}"`}</p>
<div className='itenmm'>
<img src={rayas}  alt="icon"  style={{ width: '400px', height: 'auto' }} />
</div>
</div>
<br />
<br />
</div>
<div id="advice-generator">
  <button className='btn-click' onClick={handleButtonClick}>
<img src="./images/icon-dice.svg" alt="dice icon" />
</button>
</div>
</>
  )
}

export default App
