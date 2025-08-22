import { useState } from "react";

function BulbToggle() {
  const [isOn, setIsOn] = useState(false); // state variable

  function toggleBulb() {
    setIsOn(!isOn); // toggle state
  }

  return (
    <div>
      <img 
        src={isOn ? "bulb-on.png" : "bulb-off.png"} 
        alt="Bulb" 
        width="100"
      />
      <button onClick={toggleBulb}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default BulbToggle;
