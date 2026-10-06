import { useState } from 'react'
import Hermano1 from './Hermano1'
import Hermano2 from './Hermano2'

const Padre = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const recibir = (n: string, a: string) => {
    setNombre(n)
    setApellido(a)
  }

  return (
    <div className="padre4">
      <h2>Componente Padre</h2>
      <Hermano1 enviar={recibir} />
      <Hermano2 nombre={nombre} apellido={apellido} />
    </div>
  )
}

export default Padre