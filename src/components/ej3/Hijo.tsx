import { useState } from 'react'

interface Props {
  enviar: (valor: string) => void
}

const Hijo = ({ enviar }: Props) => {
  const [texto, setTexto] = useState('')

  return (
    <div className="hijo">
      <h3>Componente Hijo</h3>
      <input
        placeholder="Escribe un dato"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={() => enviar(texto)}>Enviar al padre</button>
    </div>
  )
}

export default Hijo