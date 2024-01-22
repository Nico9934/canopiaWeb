import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientesProvider from "./components/UserContext";
import UserForm from "./components/UserForm";
import Header from "./components/Header";
import MainRoutes from "./components/MainRoutes";

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
