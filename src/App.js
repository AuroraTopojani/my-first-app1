import "./App.css";
import Header from "./Header";
import componentIMG from "./assets/components.png";
import stateIMG from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./Props/CoreConcepts";
import TabButton from "./Props/TabButton";
// import Greeting from "./Greeting";
// import ProductCard from "./Props/ProductCard";
// import AlertBox from "./AlertBox";
import { useState } from "react";
import { EXAMPLES } from "./data";
import LikeButton from "./LikeButton";
import CounterEffect from "./useEffect/CounterEffect";
import TitleExample from "./useEffect/TitleExample";
import PostList from "./useEffect/PostList";
import FocusInput from "./useRef/FocusInput";
import CounterRef from "./useRef/CounterRef";
import PreviousValue from "./useRef/PreviousValue";
import ComponentC from "./useContext/ComponentC";
import React from "react";
import CounterMemo from "./useMemo/CounterMemo";
import StudentsList from "./renderingLists/StudentsList";
import StudentListID from "./renderingLists/StudentListID";
import ToDoList from "./renderingLists/TodoList";
import UsersTable from "./DynamicTables/UsersTable";
import MyTable from "./DynamicTables/MyTable";
import SortingTable from "./DynamicTables/SortingTable";
import UserListAxios from "./axios/UserListAxios";
import PostUserListAxios from "./axios/PostUserListAxios";
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
      </Routes>
    </div>
  );
}
