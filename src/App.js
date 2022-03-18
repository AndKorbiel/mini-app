import "./styles/App.css";
import Topbar from "./components/Topbar";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import SinglePage from "./views/SinglePage";
import { theme } from "./styles/palette";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";

export const MyContext = React.createContext("Message");

const App = () => {
  const [count, setCount] = useState(0);
  const handleSetCount = () => {
    setCount(count + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyContext.Provider value={{ count, action: handleSetCount }}>
          <Topbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/single-page/:id" element={<SinglePage />} />
          </Routes>
        </MyContext.Provider>
        <button onClick={() => handleSetCount()}>Click me</button>
      </div>
    </ThemeProvider>
  );
};

export default App;
