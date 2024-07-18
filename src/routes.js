
import Cavaleiros from "componentes/Grupos/Grupo/Cavaleiros";
import CardDestaqueCavaleiro from "pages/CardDestaqueCavaleiro";
import Inicio from "pages/Inicio";
import Video from "pages/NovoVideo";
import PaginaBase from "pages/PaginaBase";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  // mockar api no json server:
  // npx json-server src/database/cavaleirosDb.json --port 8080

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Inicio />}></Route>
            <Route path="/video" element={<Video />}></Route>
            <Route path="cavaleiros/:id" element={<Cavaleiros />}>
            </Route>
            <Route path="cavaleiros/card/:id" element={<CardDestaqueCavaleiro />}></Route>
          </Route>
          <Route path="*" element={<PaginaNaoEncontrada />}></Route>          
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;
