import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Vitor Lopes" 
              content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, aut sit odio voluptas facilis eveniet! Ea odit, officiis illo dolore tempore, quibusdam similique suscipit, maxime vitae eum provident aliquam iure."
          />

          <Post 
            author="Diego Rocketseat" 
            content="Um Post muito legal"
          />
        </main>
      </div>
    </div>
  )
}