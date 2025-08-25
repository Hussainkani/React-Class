import React, { useContext } from "react";
import Child from "./Child";
import { context } from "./GrandFather";

const Son = () => {

    const { messageTwo , handleAlertTwo } = useContext(context)
  return (
    <div className="mt-10">
      <h2 className="text-black bg-blue-400 p-5 mt-10">Son : { messageTwo } </h2>
      <button
        className="bg-black text-white p-4 rounded-3xl"
        type="button"
        onClick={handleAlertTwo}
      >
        {" "}
        Click Me{" "}
      </button>

      <Child />
    </div>
  );
};

export default Son;
