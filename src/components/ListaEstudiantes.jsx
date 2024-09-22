import { useEffect, useState } from "react";
const ListaEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState({
    ine: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
  });


  useEffect(() =>{
    const data = new URLSearchParams(window.location.search).get("data");
    if(data !== null){
      const { ine, nombre, apellido, telefono, correo } = JSON.parse(data);
      setEstudiantes({ ine, nombre, apellido, telefono, correo });
    }
  })
  
  return (
      <div className="col-md-7 mt-2">
        <div className="card">
          <div className="card-header">Lista de Estudiante</div>
          <div className="card-body"></div>
          <div className="card-body" style={{display: estudiantes.ine ? "initial" : "none"}}><strong>Ine:</strong> {estudiantes.ine}</div>
          <div className="card-body" style={{display: estudiantes.nombre ? "initial" : "none"}}><strong>Nombre:</strong> {estudiantes.nombre}</div>
          <div className="card-body" style={{display: estudiantes.apellido ? "initial" : "none"}}><strong>Apellido paterno:</strong> {estudiantes.apellido}</div>
          <div className="card-body" style={{display: estudiantes.telefono ? "initial" : "none"}}><strong>Teléfono:</strong> {estudiantes.telefono}</div>
          <div className="card-body" style={{display: estudiantes.correo ? "initial" : "none"}}><strong>Correo:</strong> {estudiantes.correo}</div>
        </div>
      </div>
    );
  }
  
  export default ListaEstudiantes;