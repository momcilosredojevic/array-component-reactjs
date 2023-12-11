import { useState } from "react";

export function ArrayComponent() {
  const initialValue = ["A", "B", "C"];

  const [array, setArray] = useState(initialValue);

  const [value, setValue] = useState("");

  //this works, shift method doesn't!!!!!!!!
  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeAllB() {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== "B");
    });
  }

  /* //ne radii! modifikovanje niza a ono iznad nije modifikvanje?
  function addAtStart() {
    setArray((currentArray) => {
      return currentArray.push("F");
    });
  } */

  function addAtStart() {
    setArray((currentArray) => {
      return ["U", ...currentArray];
    });
  }

  function addToEnd() {
    setArray((currentArray) => {
      return [...currentArray, "U"];
    });
  }

  function clearArray() {
    setArray((currentArray) => {
      return [""];
    });
  }

  function resetArray() {
    setArray(initialValue);
  }

  function aToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element == "A") {
          return "H";
        } else {
          return element;
        }
      });
    });
  }

  function addToIndex2() {
    setArray();
  }

  return (
    <div>
      <div>{array.join(",")}</div>
      <br />
      <button onClick={removeFirstElement}>Remove 1st element</button>
      <br />
      <br />
      <button onClick={removeAllB}>Remove all B</button>
      <br />
      <br />
      <button onClick={addAtStart}>Add at start</button>
      <br />
      <br />
      <button onClick={addToEnd}>Add at end</button>
      <br />
      <br />
      <button onClick={clearArray}>Clear array</button>
      <br />
      <br />
      <button onClick={resetArray}>Reset array</button>
      <br />
      <br />
      <button onClick={aToH}>A to H</button>
      <br />
    </div>
  );
}
