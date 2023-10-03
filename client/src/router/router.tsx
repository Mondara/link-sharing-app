import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Links, Login, Signup, ProfileDetails, Preview } from "@/pages";
import { AuthLayout, ProfileLayout, PreviewLayout } from "@/layout";
import { App, RequireAuth } from '@/components';
import { getUserProfileDataFromName } from '@/services';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>


      <Route path="/" element={
        <RequireAuth>
          <ProfileLayout />
        </RequireAuth>
      }>
        <Route index element={<Links />} />
        <Route path="profileDetails" element={<ProfileDetails />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/preview" element={<PreviewLayout />}>
        <Route path=":user" element={<Preview />}
          loader={async ({ params }) => {
            if (!params?.user) return null;

            try {
              const response = await getUserProfileDataFromName(params.user);
              return response;
            } catch (err) {
              return null;
            }
          }}

        />
      </Route>



    </Route>
  )
);
