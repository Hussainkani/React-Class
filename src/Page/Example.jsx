import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";

const Example = () => {
  const [open, setIsOpen] = useState(false);
  console.log("current state" , open);

  const [ isSignUp , setIsSignUp ] = useState(false)
  
  return (
<>
    <header className=" bg-green-300 shadow-lg sticky top-0 w-full">
      <div className="flex items-center px-5 py-4 justify-between w-full">
        <div className="w-20 flex items-center ">
          <h2 className="bg-white px-4 py-3 rounded-2xl shadow">logo</h2>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-5 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact </li>
          </ul>
        </div>

        <div className="flex items-center">
          <button className="bg-green-800 hidden lg:block px-4 py-3 rounded-2xl shadow text-white">
            {" "}
            Button{" "}
          </button>

          <button
            onClick={() => {
              setIsOpen(!open);
            }}
            className="bg-green-800 lg:hidden px-4 py-3 rounded-2xl shadow text-white"
          >
            {" "}
            {open ? <MdOutlineClose /> : <TiThMenu />}{" "}
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-gray-200 lg:hidden">
          <ul className="flex flex-col gap-5 px-10 py-5 ">
            <li>Home</li>
            <li>About</li>
            <li>Contact </li>
          </ul>
        </div>
      )}
    </header>

       <div
        className="h-screen relative flex items-center justify-center bg-gray-400"
        style={{
          backgroundImage: 'url("/download (3).jpeg")',
          backgroundSize: "cover",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="text-4xl relative w-[80%] mx-auto font-bold p-6 bg-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          cumque molestiae facere
        </p>
      </div>

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

         
        <form className="bg-white p-6 rounded-2xl shadow-lg w-[25%] space-y-4">
           <h2 className="font-bold  text-xl"> { isSignUp ? "Sign Up" : "Log in" } </h2>
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          { isSignUp &&  (
            <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          ) }

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>


          <p> { isSignUp ? "Alreay have accunt" : "New User..." } <button onClick={ () => {
             setIsSignUp(!isSignUp)
          } } type="button" className="text-blue-600"
          > { isSignUp ? "Log in" : "Sign Up"  } </button> </p>

          <button
            type="submit"
            className="w-full transition-transform hover:scale-90 duration-1000  bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 "
          >
            Submit
          </button>




        </form>
      </div>


    
    </>
  );
};

export default Example;
