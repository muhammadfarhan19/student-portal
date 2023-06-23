// TODO: answer here
// import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import EditStudent from "./Routes/EditStudent";
import AddStudent from "./Routes/AddStudent";
import NotFound from "./Routes/NotFound";

export const theme = extendTheme({
  styles: {
    global: {
      "a:hover": {
        textDecoration: "none",
      },
    },
  },
});

const App = () => {
  return (
    // <>
    //   {/* <h1>test</h1> */}
    //   {/* <Home /> */}
    //   {/* <Student /> */}
    //   {/* <EditStudent /> */}
    //   {/* <AddStudent /> */}
    // </>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/add" element={<AddStudent />} />
      <Route path="/student/:id" element={<EditStudent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
