import style from "./Technos.scss"
import { useState } from 'preact/hooks'

const Technos = () => {
  const [current, setCurrent] = useState('react')
  const technos = ['react', 'vue', 'next', 'nuxt', 'three', 'typeScript']

  return (
    <div className={style.technos}>
      {technos.map((el) => {
        return(
          <div className={style.img__container} onMouseEnter={(e) => setCurrent(el)}>
            <img className={current === el && 'active'} src={"/assets/icons/techno-" + el +".svg"} alt={'Logo de ' + el} />
            <p className={style.technos__current}>{el}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Technos