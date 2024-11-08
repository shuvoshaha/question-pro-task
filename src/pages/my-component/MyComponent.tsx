// MyComponent.tsx
import React, { useEffect, useState } from "react";

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(-1);
  const [isClick, setIsClick] = useState(false)

  let button = document?.getElementsByTagName('button')[0] 

  const getCounthandle = () =>  {
         setIsClick(!isClick)
  }

  useEffect(() =>  {
    button?.addEventListener('click',  getCounthandle)
    return () => button?.removeEventListener('click', getCounthandle)

  },[document, button, isClick])

  useEffect(() => {
    setCount(count + 1);
  }, [isClick])

  return (
    <>
      <div>
        <p>Only one button can be active at {count} time.</p>
        <button>Countable Button</button>
        <button>Dumb Button</button>


        {/* <Button
          onClick={() => handleClick("countable")}
          isClicked={activeButton === "countable"}
        >
          Countable Button
        </Button> */}
    
      </div>
    </>
  );
};

export default MyComponent;
