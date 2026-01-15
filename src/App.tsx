import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GenericRoutes from "./routes/GenericRoutes";
import { CartProvider } from "./providers/CartProvider ";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div className="app-layout">
          <GenericRoutes />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
