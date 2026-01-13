import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GenericRoutes from "./routes/GenericRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <GenericRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
