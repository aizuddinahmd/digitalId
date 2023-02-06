import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateId, Profile } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className={`flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateId />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
