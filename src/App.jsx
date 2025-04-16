import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
     <Dashboard />
    </BrowserRouter>
  );
}

export default App;
