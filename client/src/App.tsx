/// <reference types="vite-plugin-svgr/client" />

import React from 'react'
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




export function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center bg-light-grey">
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        theme="light"
      />
    </div>
  )
}
