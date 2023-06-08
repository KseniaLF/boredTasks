import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Container from "@mui/material/Container";

import Home from "../pages/Home";
import Menu from "../components/Menu";
const List = lazy(() => import("../pages/List"));
const Achievements = lazy(() => import("../pages/Achievements"));

function App() {
  return (
    <>
      <Menu />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
