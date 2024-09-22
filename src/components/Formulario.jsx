import React, { useEffect, useState } from 'react';
 
const Formulario = () => {
  const [estudiante, setEstudiante] = useState({
    ine: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
  });

  useEffect(() => {
    try{
      const data = new URLSearchParams(window.location.search).get("data"); 
      if(data !== null){
        const { ine, nombre, apellido, telefono, correo } = JSON.parse(data);
        setEstudiante({ ine, nombre, apellido, telefono, correo });
      }  
    }catch(e){
      console.log("Ocurrio un problema al obtener los datos");
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setEstudiante({ ...estudiante, [name]: value });
  }

  const reset = () => {
    setEstudiante({
      ine: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = `http://localhost:5173/?data=${JSON.stringify(estudiante)}`;
  }

    return (
<form onSubmit={onSubmit}>
      <div className="col-md-5 mt-2"></div>
      <div className="card">
        <div className="card-header">Formulario</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Num. Ine:
            </span>
            <input
              type="text"
              name="ine"
              className="form-control"
              value={estudiante.ine}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre:
            </span>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={estudiante.nombre}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Apellido Paterno:
            </span>
            <input
              type="text"
              name="apellido"
              className="form-control"
              value={estudiante.apellido}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Teléfono:
            </span>
            <input
              type="tel"
              name="telefono"
              className="form-control"
              value={estudiante.telefono}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Correo:
            </span>
            <input
              type="email"
              name="correo"
              className="form-control"
              value={estudiante.correo}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success" style={{marginRight: "20px"}}>
            Enviar
          </button>
          <button type="button" className="btn btn-primary" onClick={reset}>
            Restablecer
          </button>
        </div>
      </div>
    </form>
    );
  }
  
  export default Formulario;

