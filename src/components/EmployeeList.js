import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {

    const navigate =  useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

  return (
    <div className="container mx-4 my-8">
        <div className="h-12">
            <button onClick={() => navigate("/addEmployee")} className="rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-900">
                Add Employee
            </button>
        </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">First Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email ID</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <td className="text-left px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                                Ashu
                            </div>
                        </td>
                        <td className="text-left px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                                Singh
                            </div>
                        </td>
                        <td className="text-left px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                                ashu@123.com
                            </div>
                        </td>
                        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                            <div className="text-sm text-gray-500">
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-800">Delete</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EmployeeList;