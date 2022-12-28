import { PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/vitorlopes523.png" />

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