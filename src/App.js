import "./App.css";
// import Greeting from "./Greeting";
// import ProductCard from "./Props/ProductCard";
// import AlertBox from "./AlertBox";
import React from "react";

import LoginForm from "./auth/LoginForm";
import PostTokenList from "./auth/PostTokenList";
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";

import { Routes } from "react-router";
import { Route } from "react-router";
export const UserContext = React.createContext();
export const CourseContext = React.createContext();
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="hello" element={<LoginForm />} />
        <Route path="posttoken" element={<PostTokenList />} />
      </Routes>
    </div>
  );
}
