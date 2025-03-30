import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <DashboardLayout />
    </BrowserRouter>
  );
}

export default App;
