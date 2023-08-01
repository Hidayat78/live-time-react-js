import React, { useState } from "react";

const MyComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      {clickCount === 1 && <p>hyy</p>}
      {clickCount === 2 && <p>byy</p>}
    </div>
  );
};

export default MyComponent;
