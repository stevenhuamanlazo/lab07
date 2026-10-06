import Componente2 from './Componente2'
import type { Persona } from './Componente4'

const Componente1 = () => {
  const persona: Persona = {
    nombre: 'Jaime',
    direccion: 'Jr. Junin 450',
    ciudad: 'Huancayo',
  }

  return (
    <div className="c1">
      <p className="etiqueta">Componente1</p>
      <Componente2 persona={persona} />
    </div>
  )
}

export default Componente1