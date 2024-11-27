import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";  // Asegúrate de que el archivo Home.jsx esté en src/pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddPublication from "./pages/AddPublicacion";
import EditPublication from "./pages/EditPublicacion";
import Publicaciones from "./pages/Publicaciones";
import Comentarios from "./pages/Comentarios";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header /> {/* Encabezado de la aplicación */}

      <Container className="mt-5">
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas privadas */}
          <Route
            path="/publicaciones"
            element={
              <PrivateRoute>
                <Publicaciones />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-publication"
            element={
              <PrivateRoute>
                <AddPublication />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-publication/:id"
            element={
              <PrivateRoute>
                <EditPublication />
              </PrivateRoute>
            }
          />
          <Route
            path="/comentarios/:id"
            element={
              <PrivateRoute>
                <Comentarios />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>

      <Footer /> {/* Pie de página */}
    </Router>
  );
}

export default App;
