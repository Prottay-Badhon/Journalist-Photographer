import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/Checkout/Checkout";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import NotFound from "./Components/NotFound/NotFound";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
