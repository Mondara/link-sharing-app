import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Login, Signup, Auth, Profile } from "@/pages";
import { App } from '@/components';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="profile" element={<Profile />}>

      </Route>
    </Route>
  )
);
