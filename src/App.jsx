import React from 'react';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,

} from 'react-router-dom';
import RootLayOut from './component/RootLayOut';
import Home from './page/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;