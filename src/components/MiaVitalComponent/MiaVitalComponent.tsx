// import React from "react"
// import Navbar from "../Navbar/Navbar"
// import "./MiaVitalComponent.css"

// interface MiaVitalComponentProps {
//     theme?:string;
// }
// const MiaVitalComponent:React.FC<MiaVitalComponentProps> = ({}) => {
//     return (
//         <>
//         <div className="MiaVital-Container">
//             <Navbar/>
//             <div className="MiaVital-Section">
//                 <section className="container px-4 mx-auto">
//                     <div className="sm:flex sm:items-center sm:justify-between">
//                         <div>
//                             <div className="flex items-center gap-x-3">
//                                 <h2 className="text-lg font-medium text-gray-800 dark:text-white">Customers</h2>

//                                 <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 vendors</span>
//                             </div>

//                             <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p>
//                         </div>

//                         <div className="flex items-center mt-4 gap-x-3">
//                             <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <g clip-path="url(#clip0_3098_154395)">
//                                     <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
//                                     </g>
//                                     <defs>
//                                     <clipPath id="clip0_3098_154395">
//                                     <rect width="20" height="20" fill="white"/>
//                                     </clipPath>
//                                     </defs>
//                                 </svg>

//                                 <span>Import</span>
//                             </button>

//                             <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>

//                                 <span>Add vendor</span>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="mt-6 md:flex md:items-center md:justify-between">
//                         <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
//                             <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
//                                 View all
//                             </button>

//                             <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
//                                 Monitored
//                             </button>

//                             <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
//                                 Unmonitored
//                             </button>
//                         </div>

//                         <div className="relative flex items-center mt-4 md:mt-0">
//                             <span className="absolute">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//                                 </svg>
//                             </span>

//                             <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
//                         </div>
//                     </div>

//                     <div className="flex flex-col mt-6">
//                         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                                 <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
//                                     <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                                         <thead className="bg-gray-50 dark:bg-gray-800">
//                                             <tr>
//                                                 <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                                                     <button className="flex items-center gap-x-3 focus:outline-none">
//                                                         <span>Company</span>

//                                                         <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                             <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
//                                                             <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
//                                                             <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
//                                                         </svg>
//                                                     </button>
//                                                 </th>

//                                                 <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                                                     Status
//                                                 </th>

//                                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                                                     About
//                                                 </th>

//                                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Users</th>

//                                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">License use</th>

//                                                 <th scope="col" className="relative py-3.5 px-4">
//                                                     <span className="sr-only">Edit</span>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
//                                             <tr>
//                                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div>
//                                                         <h2 className="font-medium text-gray-800 dark:text-white ">Catalog</h2>
//                                                         <p className="text-sm font-normal text-gray-600 dark:text-gray-400">catalogapp.io</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
//                                                         Customer
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div>
//                                                         <h4 className="text-gray-700 dark:text-gray-200">Content curating app</h4>
//                                                         <p className="text-gray-500 dark:text-gray-400">Brings all your news into one place</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="flex items-center">
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
//                                                         <div className="bg-blue-500 w-2/3 h-1.5"></div>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
//                                                         </svg>
//                                                     </button>
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div>
//                                                         <h2 className="font-medium text-gray-800 dark:text-white ">Circooles</h2>
//                                                         <p className="text-sm font-normal text-gray-600 dark:text-gray-400">getcirooles.com</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
//                                                         Churned
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div>
//                                                         <h4 className="text-gray-700 dark:text-gray-200">Design software</h4>
//                                                         <p className="text-gray-500 dark:text-gray-400">Super lightweight design app</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="flex items-center">
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
//                                                         <div className="bg-blue-500 w-2/5 h-1.5"></div>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
//                                                         </svg>
//                                                     </button>
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div>
//                                                         <h2 className="font-medium text-gray-800 dark:text-white ">Sisyphus</h2>
//                                                         <p className="text-sm font-normal text-gray-600 dark:text-gray-400">sisyphus.com</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
//                                                         Customer
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div>
//                                                         <h4 className="text-gray-700 dark:text-gray-200">Automation and workflow</h4>
//                                                         <p className="text-gray-500 dark:text-gray-400">Time tracking, invoicing and expenses</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="flex items-center">
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
//                                                         <div className="bg-blue-500 w-11/12 h-1.5"></div>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
//                                                         </svg>
//                                                     </button>
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div>
//                                                         <h2 className="font-medium text-gray-800 dark:text-white ">Hourglass</h2>
//                                                         <p className="text-sm font-normal text-gray-600 dark:text-gray-400">hourglass.app</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
//                                                         Churned
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div>
//                                                         <h4 className="text-gray-700 dark:text-gray-200">Productivity app</h4>
//                                                         <p className="text-gray-500 dark:text-gray-400">Time management and productivity</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="flex items-center">
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
//                                                         <div className="bg-blue-500 w-1/3 h-1.5"></div>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
//                                                         </svg>
//                                                     </button>
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div>
//                                                         <h2 className="font-medium text-gray-800 dark:text-white ">Quotient</h2>
//                                                         <p className="text-sm font-normal text-gray-600 dark:text-gray-400">quotient.co</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
//                                                     <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
//                                                         Customer
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div>
//                                                         <h4 className="text-gray-700 dark:text-gray-200">Sales CRM</h4>
//                                                         <p className="text-gray-500 dark:text-gray-400">Web-based sales doc management</p>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="flex items-center">
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
//                                                         <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
//                                                         <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <div className="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
//                                                         <div className="bg-blue-500 w-1/6 h-1.5"></div>
//                                                     </div>
//                                                 </td>

//                                                 <td className="px-4 py-4 text-sm whitespace-nowrap">
//                                                     <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
//                                                         </svg>
//                                                     </button>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
//                         <div className="text-sm text-gray-500 dark:text-gray-400">
//                             Page <span className="font-medium text-gray-700 dark:text-gray-100">1 of 10</span> 
//                         </div>

//                         <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
//                             <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
//                                 </svg>

//                                 <span>
//                                     previous
//                                 </span>
//                             </a>

//                             <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
//                                 <span>
//                                     Next
//                                 </span>

//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>        
//         </>
//     )
// }
// export default MiaVitalComponent
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { red } from '@mui/material/colors';

interface Data {
    id: number;
    name: string;
    memberId: string;
    riskCategory: string;
    riskLevel: string;
    heartRate: number;
    bloodPressure: number;
    temperature: number;
    respirationRate: number ;
    spo2: number;
}

function createData(
    id: number,
    name: string,
    memberId: string,
    riskCategory: string,
    riskLevel: string,
    heartRate: number,
    bloodPressure: number,
    temperature: number,
    respirationRate: number ,
    spo2: number
): Data {
  return {
    id,
    name,
    memberId,
    riskCategory,
    riskLevel,
    heartRate,
    bloodPressure,
    temperature,
    respirationRate,
    spo2
  };
}

const rows = [
  createData(1, 'Jane Cooper', 'COPD', 'High','High', 54 , 113.62 , 36.9 , 17 , 88),
  createData(2, 'Esther Howard', 'CHF', 'High','High', 51 , 95.75 , 36.9 , 13 , 96),
  createData(3, 'Esther Howard', 'Diabetes', 'High','High', 52 , 117.74 , 36.6 , 15 , 96),
  createData(4, 'Cameron Wiliamson', 'Chronic Pain', 'Miderate','Miderate', 42 , 119.62 , 37.8 , 12 , 100),
  createData(5, 'Brookiyn Simmons', 'CHF', 'High','High', 49 , 117.66 , 37 , 13 , 99),
  createData(6, 'Leslie Alexander', 'COPD', 'High','High', 65 , 116.72 , 38 , 14 , 98),
  createData(7, 'Guy Hawkins', 'Chronic Pain', 'Miderate','Miderate', 65 , 108.64 , 37.9 , 17 , 100),
  createData(8, 'Robert Fox', 'CHF', 'High','High', 59 , 108.71 , 38.2 , 13 , 98),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Member Name',
  },
  {
    id: 'memberId',
    numeric: true,
    disablePadding: true,
    label: 'Member ID',
  },
  {
    id: 'riskCategory',
    numeric: true,
    disablePadding: true,
    label: 'Risk Category',
  },
  {
    id: 'riskLevel',
    numeric: true,
    disablePadding: true,
    label: 'Risk Level',
  },
  {
    id: 'heartRate',
    numeric: true,
    disablePadding: true,
    label: 'Heart Rate',
  },
  {
    id: 'bloodPressure',
    numeric: true,
    disablePadding: true,
    label: 'Blood Pressure',
  },
  {
    id: 'temperature',
    numeric: true,
    disablePadding: true,
    label: 'Temperature',
  },
  {
    id: 'respirationRate',
    numeric: true,
    disablePadding: true,
    label: 'Respiration Rate',
  },
  {
    id: 'spo2',
    numeric: true,
    disablePadding: true,
    label: 'spo2',
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell 
        padding="checkbox"
        sx={{ backgroundColor: '#b4b4b41a' }} // Add custom style for background color

        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left' }
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ backgroundColor: '#b4b4b41a' }} // Add custom style for background color

          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
        Overview
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>();
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.memberId}</TableCell>
                    <TableCell align="center">{row.riskCategory}</TableCell>
                    <TableCell align="center">{row.riskLevel}</TableCell>
                    <TableCell align="center">{row.heartRate}</TableCell>
                    <TableCell align="center">{row.bloodPressure}</TableCell>
                    <TableCell align="center">{row.temperature}</TableCell>
                    <TableCell align="center">{row.respirationRate}</TableCell>
                    <TableCell align="center">{row.spo2}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}