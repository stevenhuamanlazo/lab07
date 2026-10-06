import { useState } from 'react'

// Ejercicio 1
import Cabecera from './components/ej1/Cabecera'
import Navegacion from './components/ej1/Navegacion'
import Seccion from './components/ej1/Seccion'
import Pie from './components/ej1/Pie'
// Ejercicio 2
import Componente1 from './components/ej2/Componente1'
// Ejercicio 3
import Padre3 from './components/ej3/Padre'
// Ejercicio 4
import Padre4 from './components/ej4/Padre'
// Ejercicio 5
import Tabla from './components/ej5/Tabla'

import './css/layout.css'
import './css/anidados.css'
import './css/padrehijo.css'
import './css/hermanos.css'
import './css/tabla.css'
import './css/menu.css'

const ejercicios = [
  {
    id: 1,
    titulo: 'Ejercicio 1: Responsivo',
    vista: (
      <div className="ej1">
        <Cabecera />
        <Navegacion />
        <Seccion />
        <Pie />
      </div>
    ),
  },
  { id: 2, titulo: 'Ejercicio 2: Anidados', vista: <Componente1 /> },
  { id: 3, titulo: 'Ejercicio 3: Hijo a Padre', vista: <Padre3 /> },
  { id: 4, titulo: 'Ejercicio 4: Hermanos', vista: <Padre4 /> },
  { id: 5, titulo: 'Ejercicio 5: Tabla', vista: <Tabla /> },
]

const App = () => {
  const [actual, setActual] = useState(1)
  const ejercicio = ejercicios.find((e) => e.id === actual)

  return (
    <>
      <nav className="menu">
        {ejercicios.map((e) => (
          <button
            key={e.id}
            className={e.id === actual ? 'activo' : ''}
            onClick={() => setActual(e.id)}
          >
            {e.titulo}
          </button>
        ))}
      </nav>
      <div className="vista">{ejercicio?.vista}</div>
    </>
  )
}

export default App