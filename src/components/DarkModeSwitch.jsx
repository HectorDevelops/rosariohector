import React, { useEffect, useState } from "react";
import Switch from "react-switch";

const DarkModeSwitch = () => {
  const [isDark, SetIsDark] = useState(false);

  const handleChange = (val) => {
    SetIsDark(val);
    console.log(isDark);
  };
  const handleModeSwitch = () => {
    SetIsDark(isDark === true ? false : true);
  };

  useEffect(() => {
    if (isDark === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="">
      <Switch
        checked={isDark}
        onChange={handleChange}
        onClick={handleModeSwitch}
        onColor="#9CA3AF"
        onHandleColor="#F97316"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="#689b35"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    </div>
  );
};

export default DarkModeSwitch;
