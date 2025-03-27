import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import Entrance from "./pages/Entrance";
import Dashboard from "./pages/Dashboard";
import AniTable from "./pages/AnimeTable";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/form" element={<AuthForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/topanime" element={<AniTable.AniTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
