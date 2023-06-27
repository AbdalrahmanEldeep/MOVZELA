import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainData } from "./components/context/Context";
import { Home } from "./components/Home/Home";
import LoginPage from "./components/Login/LoginPage";
import { Movie } from "./components/movie/Movie";
import { Nav } from "./components/nav/Nav";
import { AuthRouteProtceter } from "./components/Protecters/AuthRouteProtceter";
import RouteProtceter from "./components/Protecters/RouteProtceter.js";
import SigninPage from "./components/Signin/SigninPage";
import { Loader } from "./components/Loader/Loader";

function App() {
  const { userData } = useContext(MainData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              userData == "" ? (
                <Loader />
              ) : userData == null ? (
                <LoginPage />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="/movie/:id"
            element={
              <RouteProtceter status={userData == null ? false : true}>
                <>
                  <Nav hidder={false} />
                  <Movie />
                </>
              </RouteProtceter>
            }
          />
          <Route
            path="/signin"
            element={
              userData == "" ? (
                <Loader />
              ) : userData == null ? (
                <SigninPage />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
