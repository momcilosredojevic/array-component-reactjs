import { useState } from "react";

export function PressComponent() {
  const [click, setClick] = useState(0);

  function press() {
    setClick((currentClick) => {
      return currentClick + 1;
    });
  }

  return (
    <div>
      <button onClick={press}>You clicked me {click} times</button>
    </div>
  );
}
