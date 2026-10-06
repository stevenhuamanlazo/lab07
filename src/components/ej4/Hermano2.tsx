interface Props {
  nombre: string
  apellido: string
}

const Hermano2 = ({ nombre, apellido }: Props) => {
  return (
    <div className="hermano2">
      <h3>Hermano 2</h3>
      <p>
        Datos recibidos: <strong>{nombre} {apellido}</strong>
      </p>
    </div>
  )
}

export default Hermano2