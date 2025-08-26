// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import CRUD from "./Page/CRUD";
// import Example from "./Page/Example";
// import Navbar from "./Page/Navbar";
// import Form from "./Page/Form";
// import { IoClose } from "react-icons/io5";
// import { MdMenu } from "react-icons/md";
// import NewForm from "./Page/NewForm";
// import { Routes, Route , Link } from "react-router-dom";
// import Home from "./Page/Home";
// import HomeMain from "./Page/HomeMain";
// import About from "./Page/About";
// import GrandFather from "./Page/UseContext/GrandFather";

// function App() {
//   const [open, setOpen] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);

//   console.log("Current state", open);

//   return (
//     <>

//       <header className="bg-blue-100 fixed top-0 left-0 z-50 w-full text-2xl   text-white">
//         <div className="flex items-center p-4 justify-between">
//           <div>
//             <h2 className="text-black ">Logo</h2>
//           </div>

//           <div className=" hidden lg:block ">
//             <ul className="flex  gap-4 text-lg font-medium text-black ">
//               <Link to="/">Home</Link>
//               <Link to="/about">About</Link>
//                 <Link to="/useContext">Use_Context</Link>
//             </ul>
//           </div>

//           <div className="flex">
//             <button className="bg-blue-500 hidden lg:block  font-normal p-1 px-3 rounded-2xl text-white">
//               Button
//             </button>

//             <button
//               onClick={() => {
//                 setOpen(!open);
//               }}
//               className="bg-blue-500 lg:hidden  font-normal p-1 px-3 rounded-2xl text-white"
//             >
//               {open ? <IoClose /> : <MdMenu />}
//             </button>
//           </div>
//         </div>

//         {open && (
//           <div className=" lg:hidden">
//             <ul className="flex bg-white flex-col justify-start items-start px-6 py-4  gap-4 text-lg font-medium text-black ">
//               <li>Home</li>
//               <li>About</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         )}
//       </header>

//       <div className="h-screen mt-20 ">
//         <Routes>
//           <Route path="/" element={<HomeMain /> } />
//            <Route path="/about" element={<About /> } />
//            <Route path="/useContext" element={ <GrandFather /> } />
//         </Routes>
//       </div>

//       <footer className="bg-gray-800 relative z-20 h-screen flex items-center justify-center  text-white">
//         <h2>Footer</h2>
//       </footer>
//     </>
//   );
// }

// export default App;

import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Page/FoodApp/Header";
import Product from "./Page/FoodApp/Product";
import Cart from "./Page/FoodApp/Cart";
import { Routes , Route } from "react-router-dom";


export const cartContext = createContext()

const App = () => {
  const [ cart , setCart ] = useState([])
  console.log("Cart List" ,  cart);
  
  return (
   <cartContext.Provider value={ { cart , setCart } }>
     <div>
      <Header  />

      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Product  />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </div>
   </cartContext.Provider>
  );
};

export default App;
