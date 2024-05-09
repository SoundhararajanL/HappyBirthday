import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation

const PandaLogin = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isWrongEntry, setIsWrongEntry] = useState(false);
  const [eyeWidth, setEyeWidth] = useState(0);
  const [eyeHeight, setEyeHeight] = useState(0);
  const [password, setPassword] = useState(''); // State to keep track of the entered password
  const navigate = useNavigate(); // Access history for navigation

  const handlePasswordFocus = () => {
    setIsFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsFocused(false);
  };

  const handleMouseMove = (event) => {
    const dw = window.innerWidth / 15;
    const dh = window.innerHeight / 15;
    const x = event.pageX / dw;
    const y = event.pageY / dh;
    setEyeWidth(x);
    setEyeHeight(y);
  };

  const handleLoginClick = () => {
    const lowercasePassword = password.toLowerCase(); // Convert entered password to lowercase
  if (lowercasePassword === 'meenukutty') {
      // Correct password, navigate to '/home'
      navigate('/home');
    } else {
      // Incorrect password, show error message
      setIsWrongEntry(true);
      setTimeout(() => {
        setIsWrongEntry(false); // Resetting the state inside setTimeout
      }, 10000);
    }
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update password state as user types
  };


  return (
    <div style={{ backgroundColor: "pink",height: '100vh', fontFamily: 'Roboto, sans-serif' , overflow: 'hidden'}}>
      <div className={`panda ${isFocused ? 'up' : ''}`}>
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball" style={{ width: `${eyeWidth}px`, height: `${eyeHeight}px` }}></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball" style={{ width: `${eyeWidth}px`, height: `${eyeHeight}px` }}></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"> </div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
        <form>
          <div className="hand"></div>
          <div className="hand rgt"></div> 
          <h1>M*******ty</h1>

          <div className="form-group">
            <input
              id="password"
              type="password"
             
              className="form-control"
              value={password}
              onChange={handlePasswordChange} 
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onMouseMove={handleMouseMove}
            />
            <label className="form-label">Nickname</label>
            {isWrongEntry && <p className="alert wrong-entry">😤Thappu...!!</p>}
            <button className="btn" onClick={handleLoginClick}>Login</button>
          </div>
        
        </form>
        <div class="quotes">
  <span>Love Is when nothing is okay and everything <br></br>
  hurting you a lot But still you want the same <br></br>
  person over and over again &#10084; ..
  </span>
</div>
      </div>
      
    </div>
  );
};

export default PandaLogin;
