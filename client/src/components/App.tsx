/// <reference types="vite-plugin-svgr/client" />

import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Login, Signup } from '@/pages'

const router = createBrowserRouter([{
  path: "login",
  element: <Login />,
},
{
  path: "signup",
  element: <Signup />
}])


export function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center bg-light-gray">
      <RouterProvider router={router} />
    </div>
  )
}
