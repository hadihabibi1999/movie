import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "./components/style.css";
import App from "./App";
import Calculator from "./components/Calculator";
import NotFound from "./components/NotFound";
import EachMovie from "./components/EachMovie";
import AboutMe from "./components/AboutMe";
import Login from "./components/Login";
import MovieForm from "./components/MovieForm";
import EachMovieOfTable from "./components/EachMovieOfTable";
import Premium from "./components/premium";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/*   <Route path="/calculator" element={<Calculator/>} /> */}
      <Route path="/main" element={<App />} />
      <Route path="/not-found" element={<NotFound />} />
      {/*     <Route path='/about-me' element={<AboutMe/>} /> */}
      <Route path="/main/movie/:id" element={<EachMovie />} />
      <Route
        path="/main/movie/table/:id/:name"
        element={<EachMovieOfTable />}
      />
      <Route path="/log-in" element={<Login />} />
      {/*    <Route path='/new-movie' element={<MovieForm/>}/> */}
      <Route path="*" element={<Navigate replace to="/not-found" />} />
      <Route path="/premium-account" element={<Premium />} />
      <Route path="/" element={<Navigate replace to="/main" />} />
    </Routes>
  </BrowserRouter>
);
