import React from 'react';
import { useState } from 'react';
import './Header.css';

interface LightSwitchProps {
    on: boolean;
}

export default function HeaderButton(props:LightSwitchProps) {

  const [on, setOn] = useState(props.on)

  const handleClick = () => {
    setOn(!on);
  }

  return (
    <div className="Header-LightSwitch" onClick={handleClick}>
      <span>Light</span>
      { on == true &&
        <svg width="50" height="25">
          <circle cx="12.5" cy="12.5" r="12.5" fill="rgb(75, 161, 196)" />
          <circle cx="37.5" cy="12.5" r="12.5" fill="rgb(75, 161, 196)" />
          <rect x="12.5" y="0" width="25" height="25" fill="rgb(75, 161, 196)" />

          <circle cx={on ? "12.5" : "37.5"} cy="12.5" r="10" fill="white" />
        </svg>
      }
      { on == false &&
        <svg width="50" height="25">
          <circle cx="12.5" cy="12.5" r="12.5" fill="rgb(75, 161, 196)" />
          <circle cx="37.5" cy="12.5" r="12.5" fill="rgb(75, 161, 196)" />
          <rect x="12.5" y="0" width="25" height="25" fill="rgb(75, 161, 196)" />
          
          <circle cx={on ? "12.5" : "37.5"} cy="12.5" r="10" fill="white" />
          <circle cx="28" cy="12.5" r="10" fill="rgb(75, 161, 196)" />
        </svg>
      }
      <span>Dark</span>
    </div>
  );
}