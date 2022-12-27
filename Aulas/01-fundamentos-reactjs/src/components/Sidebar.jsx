import { PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/vitorlopes523.png"/>

        <strong>Vitor Lopes de Matos</strong>
        <span>Front-end Jr Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}