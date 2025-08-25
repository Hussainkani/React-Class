import React from 'react'
import NewForm from './NewForm'

const Home = () => {
  return (
    <div className=''>

           {/* Banner section */}

      <div
        className="h-screen relative bg-gray-100 flex items-center justify-center p-20"
        style={{
          backgroundImage: 'url("/vibrant-autumn-maple-leaves-nature-beauty-showcased-generated-by-ai.jpg")',
          backgroundSize: "cover",
        }}
      >

        <div className="absolute bg-black opacity-10 inset-0"></div>

        <div className="rounded-3xl relative shadow-2xl text-white flex flex-col justify-center items-center  p-5">
          <h1 className="font-bold text-4xl">Heading</h1>
          <p className="font-light text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* grid section */}

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 w-[80%] mx-auto gap-10">
        <div className="border gap-5 rounded-3xl shadow-2xl flex flex-col justify-center items-center  p-4">
          <div className="  ">
            <img
              src="/Contact us.gif"
              className="object-cover w-52 h-52 "
              alt=""
            />
          </div>
          <h2 className=" font-bold text-4xl">Title 1</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button className="bg-blue-600 p-3 text-white rounded-xl transition-transform hover:scale-90 duration-[] border-2 border-blue-600 hover:text-blue-600 hover:bg-white ">
            Read More
          </button>
        </div>

        <div className="border gap-5 rounded-3xl shadow-2xl flex flex-col justify-center items-center  p-4">
          <div className=" w-fit ">
            <img
              src="/Contact us.gif"
              className="object-cover w-52 h-52 "
              alt=""
            />
          </div>
          <h2 className=" font-bold text-4xl">Title 2</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button className="bg-blue-600 p-3 text-white rounded-xl transition-transform hover:scale-90 duration-[] border-2 border-blue-600 hover:text-blue-600 hover:bg-white ">
            Read More
          </button>
        </div>

        <div className="border gap-5 rounded-3xl shadow-2xl flex flex-col justify-center items-center  p-4">
          <div className=" w-fit ">
            <img
              src="/Contact us.gif"
              className="object-cover w-52 h-52 "
              alt=""
            />
          </div>
          <h2 className=" font-bold text-4xl">Title 3</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button className="bg-blue-600 p-3 text-white rounded-xl transition-transform hover:scale-90 duration-[] border-2 border-blue-600 hover:text-blue-600 hover:bg-white ">
            Read More
          </button>
        </div>

        <div className="border gap-5 rounded-3xl shadow-2xl flex flex-col justify-center items-center  p-4">
          <div className=" w-fit ">
            <img
              src="/Contact us.gif"
              className="object-cover w-52 h-52 "
              alt=""
            />
          </div>
          <h2 className=" font-bold text-4xl">Title 4</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <button className="bg-blue-600 p-3 text-white rounded-xl transition-transform hover:scale-90 duration-[] border-2 border-blue-600 hover:text-blue-600 hover:bg-white ">
            Read More
          </button>
        </div>
      </div>


      {/* form */}

      <NewForm />
      
    </div>
  )
}

export default Home
