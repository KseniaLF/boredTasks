import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Container from "@mui/material/Container";

import Home from "../pages/Home";
import Menu from "../components/Menu";
const List = lazy(() => import("../pages/List"));
const Achievements = lazy(() => import("../pages/Achievements"));
const Completed = lazy(() => import("../pages/Completed"));

function App() {
  return (
    <>
      <Menu />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
