import Articulo1 from './Articulo1'
import Articulo2 from './Articulo2'
import Aside from './Aside'

const Seccion = () => {
  return (
    <div className="seccion">
      <section className="seccion-articulos">
        <p className="etiqueta-seccion">&lt;section&gt;</p>
        <Articulo1 />
        <Articulo2 />
        <p className="etiqueta-seccion">&lt;/section&gt;</p>
      </section>
      <Aside />
    </div>
  )
}

export default Seccion