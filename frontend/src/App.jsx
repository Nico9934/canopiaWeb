import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientesProvider from "./components/UserContext";
import Header from "./components/Header";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <ClientesProvider>
      <BrowserRouter>
        <Header />
        <MainRoutes />
      </BrowserRouter>
    </ClientesProvider>
  );
}

export default App;
