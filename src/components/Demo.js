import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [text, setText] = useState(0);

  console.log("Rendering...");

  //To memoize the heavy/expensive operation/calculation, we have to use useMemo() hook (for better performance)
  // const prime = () => {
  //   console.log("Calculate the nth prime no. of " + text);
  //we want to memoize the result of this heavy operation performing function
  // return findNthPrime(text); //let's memoize this result bcz it is performing heavy valculations
  // };

  //using useMemo() cache the results of returened value of findNthPrime() function between re-renders, untill our dep(text) changes
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <>
      <div
        className={
          "m-8 p-4 border border-black w-96 h-96" +
          (isDarkTheme && " text-white bg-gray-900")
        }
      >
        <div>
          <input
            type="number"
            className="border border-black text-lg w-72 px-2 py-1 text-black"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsDarkTheme(!isDarkTheme);
            }}
            className="px-4 py-2 ml-3 border "
          >
            {!isDarkTheme ? (
              <MdDarkMode className="w-4 h-4 " />
            ) : (
              <CiLight className="w-4 h-4 text-white " />
            )}
          </button>
        </div>
        <div>
          <h1 className="font-bold text-xl">nth Prime : {prime}</h1>
        </div>
      </div>
    </>
  );
};

export default Demo;

//The issue with React is, it renders the component everytime any prop or state changes, to reduces the performance
//of application, if broser has to perfrom some heavy opration..to resolve this we can memoize heavy operations
// results between re-renders
