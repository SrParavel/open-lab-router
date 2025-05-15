import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "./layouts/Layout.tsx";
import Projects from "./pages/Projects.tsx";
import AuthRedirect from "./components/auth/AuthRedirect.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/explore" replace />} />
          <Route path="explore" element={<App />} />
          <Route
            path="projects"
            element={
              <AuthRedirect>
                <Projects />
              </AuthRedirect>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
