interface Estudiante {
  id: number
  name: string
  city: string
}

const estudiantes: Estudiante[] = [
  { id: 1, name: 'Jose Lazo', city: 'Huancayo' },
  { id: 2, name: 'Ana Trelles', city: 'Lima' },
  { id: 3, name: 'Pedro Gonzales', city: 'Arequipa' },
  { id: 4, name: 'Rosa Soto', city: 'Trujillo' },
]

const Fila = ({ id, name, city }: Estudiante) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{city}</td>
    <td><button>Ver</button></td>
  </tr>
)

const Tabla = () => (
  <>
    <h2>Lista de estudiantes</h2>
    <table className="tabla">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {estudiantes.map((e) => (
          <Fila key={e.id} {...e} />
        ))}
      </tbody>
    </table>
  </>
)

export default Tabla