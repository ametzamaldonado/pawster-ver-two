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
          element={<LandingPage />}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;