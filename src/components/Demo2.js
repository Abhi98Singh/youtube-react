import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  console.log("Rendering...");

  //we want to hold the value of x variable even if our comp re-render
  let x = 0;
  // const x = 10;

  const [y, setY] = useState(0);

  //using useRef() hook => useRef() returns us a variable(a obj), it persistes the value
  const ref = useRef(0); //useRef() gives us an obj with current hardcoded value
  console.log(ref);
  /** not like => ref = 0
   *  ref = { current : 0 }
   */

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("useEffect..", Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-8 p-4 border border-black w-96 h-96">
      <div>
        <span className="font-bold text-xl">x = {x}</span>

        <button
          className="px-3 py-1 bg-green-600 text-white ml-2"
          onClick={() => {
            x = x + 1;
            console.log("x = ", x);
            //x gets updated but it doesnt re-render the component (there is no way we can update the UI)
          }}
        >
          Increase x
        </button>
      </div>
      <div className="mt-3">
        <span className="font-bold text-xl">State(y) = {y}</span>

        <button
          className="px-3 py-1 bg-green-600 text-white ml-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
      </div>
      <div className="mt-3">
        <span className="font-bold text-xl">Ref = {ref.current}</span>

        <button
          className="px-3 py-1 bg-green-600 text-white ml-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = ", ref.current);
          }}
        >
          Increase Ref
        </button>
      </div>
      <button
        className="px-4 py-2 bg-red-800 text-white font-bold rounded-lg mt-5"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop useEffect Printing
      </button>
    </div>
  );
};

export default Demo2;
