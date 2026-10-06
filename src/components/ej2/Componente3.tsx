import Componente4, { type Persona } from './Componente4'

interface Props {
  persona: Persona
}

const Componente3 = ({ persona }: Props) => {
  return (
    <div className="c3">
      <p className="etiqueta">Componente3</p>
      <Componente4 persona={persona} />
    </div>
  )
}

export default Componente3