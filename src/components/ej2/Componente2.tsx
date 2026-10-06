import Componente3 from './Componente3'
import type { Persona } from './Componente4'

interface Props {
  persona: Persona
}

const Componente2 = ({ persona }: Props) => {
  return (
    <div className="c2">
      <p className="etiqueta">Componente2</p>
      <Componente3 persona={persona} />
    </div>
  )
}

export default Componente2