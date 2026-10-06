import { useState } from 'react'
import Hijo from './Hijo'

const Padre = () => {
  const [dato, setDato] = useState('')

  return (
    <div className="padre">
      <h2>Componente Padre</h2>
      <p>
        Dato recibido del hijo: <strong>{dato}</strong>
      </p>
      <Hijo enviar={setDato} />
    </div>
  )
}

export default Padre