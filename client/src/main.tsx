import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { router } from '@/router'
import { AuthProvider, ProfileProvider } from '@/context';
import './index.css'

if (process.env.NODE_ENV === 'production') disableReactDevTools;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ProfileProvider>
      <RouterProvider router={router} />
    </ProfileProvider>
  </AuthProvider>
  ,
)
