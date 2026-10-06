import { useState } from 'react'

interface Props {
  enviar: (nombre: string, apellido: string) => void
}

const Hermano1 = ({ enviar }: Props) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  return (
    <div className="hermano1">
      <h3>Hermano 1</h3>
      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <button onClick={() => enviar(nombre, apellido)}>Enviar a Hermano 2</button>
    </div>
  )
}

export default Hermano1