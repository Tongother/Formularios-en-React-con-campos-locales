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
          <div className="card-body"><strong>Ine:</strong> {estudiantes.ine}</div>
          <div className="card-body"><strong>Nombre:</strong> {estudiantes.nombre}</div>
          <div className="card-body"><strong>Apellido paterno:</strong> {estudiantes.apellido}</div>
          <div className="card-body"><strong>Teléfono:</strong> {estudiantes.telefono}</div>
          <div className="card-body"><strong>Correo:</strong> {estudiantes.correo}</div>
        </div>
      </div>
    );
  }
  
  export default ListaEstudiantes;