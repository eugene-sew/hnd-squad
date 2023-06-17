import { createRef, useState } from "react";

import { Preloader } from "./components";
import { LandingPage, LoginPage, Register } from "./pages";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  // routes
  // landing --done
  // login --done
  // signup --done
  // main - contains people
  // matches
  // chats
  // profile
  const router = createHashRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="login"
          element={<LoginPage />}
        />
        <Route
          path="new"
          element={<Register />}
        />
        <Route
          path="/"
          element={<MainLayout />}></Route>
      </Route>
    )
  );
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
