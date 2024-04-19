import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { LibroCrear } from "../../componentes/libros/LibroCrear";
import { LibroListar } from "../../componentes/libros/LibroListar";
import { LibroAdmin } from "../../componentes/libros/LibroAdmin";
import { LibroActualizar } from "../../componentes/libros/LibroActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Libreria } from "../../componentes/libros/Libreria";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/librocre" element={<LibroCrear />} />
      <Route path="/librolis" element={<LibroListar />} />
      <Route path="/libroadm" element={<LibroAdmin />} />

      <Route path="/liboactual/:codigo" element={<LibroActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />

      <Route path="/libreria" element={<Libreria/>} />

    </Routes>
  );
};
