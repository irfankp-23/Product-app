import React from 'react'


const View = () => {
  return (
    <div class="p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               
           
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src=""
            alt=""
            class="w-full h-48 object-cover"
          />


          <div class="p-4">
            <h2 class="text-white-900 text-xl font-bold ">
              Name
            </h2>


            <p class="text-gray-500 mt-2">
              Disc
            </p>


            <p class="text-green-600 font-bold text-lg mt-3">
              Price
            </p>


            <button class="w-full bg-red-600 text-white py-2 mt-3 rounded hover:bg-red-700">
              Delete
            </button>


            <button class="w-full bg-green-600 text-white py-2 mt-3 rounded hover:bg-red-700">
              update
            </button>


          </div>
        </div>
      </div>
    </div>
  )
}


export default View

