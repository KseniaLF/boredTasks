import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Container from "@mui/material/Container";
import Menu from "../components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
