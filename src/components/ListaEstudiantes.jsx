import Estudiante from "./Estudiante";

const ListaEstudiantes = ({estudiante, estudiantes, borrar, setEstudiante}) => {

  return (
      <div className="col-md-7 mt-2">
        <div className="card" style={{backgroundColor: "#2f2f2f"}}>
          <div className="card-header" style={{color: "white"}}>Lista de estudiantes</div>
          <div className="card-body" style={{backgroundColor: "#3f3f3f", color: "white"}}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" style={{backgroundColor: "#5f5f5f", color: "white"}}>Documento</th>
                  <th scope="col" style={{backgroundColor: "#5f5f5f", color: "white"}}>Nombre</th>
                  <th scope="col" style={{backgroundColor: "#5f5f5f", color: "white"}}>Apellido</th>
                  <th scope="col" style={{backgroundColor: "#5f5f5f", color: "white"}}>Correo</th>
                  <th scope="col" style={{backgroundColor: "#5f5f5f", color: "white"}}>Telefono</th>
                  <th scope="col" style={{backgroundColor: "#5f5f5f", color: "white"}}></th>
                </tr>
              </thead>
              <tbody >
                {estudiantes && estudiantes.length ? (
                  estudiantes.map((est) => (
                    <Estudiante
                      key={est.id}
                      estudiante={est}
                      borrar={borrar}
                      setEstudiante={setEstudiante}
                    />
                  ))
                  ) : (
                    <tr >
                      <td colSpan={5} scope="row" style={{backgroundColor: "#5f5f5f", color: "white"}}>No hay estudiantes</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default ListaEstudiantes;