import React from 'react';

const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            
            {/* First Name */}
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            {/* Last Name */}
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            {/* email */}
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input type="email" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            {/* Save & Clear - Button */}
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700">Save</button>
                <button className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">Clear</button>
            </div>

        </div>
    </div>
  )
}

export default AddEmployee;