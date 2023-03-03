import NavBar from "./components/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import { CssBaseline } from "@mui/material";
import AddProducts from "./components/AddProducts";
import EditProducts from "./components/EditProduct";
import { useState } from "react";

export default function App() {
  const[editID,setEditId]=useState()
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/add" element={<AddProducts />} />
        <Route path="/edit" element={<EditProducts editID={editID}/>} />
        <Route path="/" element={<Home setEditId={setEditId}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
