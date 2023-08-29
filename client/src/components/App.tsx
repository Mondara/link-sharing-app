/// <reference types="vite-plugin-svgr/client" />

import React from 'react'
import { Outlet } from "react-router-dom";





export function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center bg-light-gray">
      <Outlet />
    </div>
  )
}
