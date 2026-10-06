export interface Persona {
  nombre: string
  direccion: string
  ciudad: string
}

interface Props {
  persona: Persona
}

const Componente4 = ({ persona }: Props) => {
  return (
    <div className="c4">
      <p className="etiqueta">Componente4</p>
      <div className="card">
        <h3>{persona.nombre}</h3>
        <p>{persona.direccion}</p>
        <p>{persona.ciudad}</p>
      </div>
    </div>
  )
}

export default Componente4