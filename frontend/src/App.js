import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={DashboardPage} />
            <Route path="/login" element={LoginPage} />
            <Route path="/register" element={RegisterPage} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
