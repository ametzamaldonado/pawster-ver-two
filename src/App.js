import "./App.scss";
import { Home, Profile, Settings, LandingPage } from "./pages/index";
import { Login, Register } from "./components/index";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
