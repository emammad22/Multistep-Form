import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";
import { Subscription } from "./pages/Subscription";
import { AboutPage } from "./pages/AboutPage";
import { PersonalInfo } from "./components/FormSteps/PersonalInfo";
import { SpecialSkills } from "./components/FormSteps/SpecialSkills";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/subscription" element={<Subscription />}>
            <Route
              path="/subscription/personalinfo"
              element={<PersonalInfo />}
            />
            <Route
              path="/subscription/special-skills"
              element={<SpecialSkills />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
