import "./App.css";
import {
  // Route,
  // Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"; //

// import { HashRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import NotFound from "./pages/NotFound/NotFound";
import Address from "./components/Adress/Address";
import Contact from "./components/Contact/Contact";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ContactPage from "./pages/ContactPage/ContactPage";

// const Root = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<HomePage />} />

//         <Route path="/users" element={<UsersPage />} />
//         <Route path="/users/:id" element={<SingleUserPage />}>
//           <Route path="address" element={<Address />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//         <Route path="/contactus" element={<ContactPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SharedLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, Component: HomePage },
        {
          path: "/users",
          // Component: UsersPage,
          children: [
            { index: true, element: <UsersPage /> },
            {
              path: "/users/:id",
              element: <SingleUserPage />,
              children: [
                { path: "address", element: <Address /> },
                { path: "contact", element: <Contact /> },
              ],
            },
          ],
        },
        { path: "/contactus", element: <ContactPage /> },
        // { path: "*", Component: NotFound },
      ],
    },
  ],
  { basename: "/react-fetch-users/" }
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

//  "build": "vite build --base /react-fetch-users",
