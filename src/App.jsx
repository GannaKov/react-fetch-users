import "./App.css";
import { Route, Routes } from "react-router-dom"; //
// import { HashRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import NotFound from "./pages/NotFound/NotFound";
import Address from "./components/Adress/Address";
import Contact from "./components/Contact/Contact";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const App = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<SingleUserPage />}>
          <Route path="address" element={<Address />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // </Router>
  );
};

export default App;
// "build": "vite build",
