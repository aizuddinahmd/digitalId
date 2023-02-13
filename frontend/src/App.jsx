import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateId, Profile, Home } from "./pages";
import { Navbar } from "./components";
import styles from "./styles";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createId" element={<CreateId />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
