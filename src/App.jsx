import { Header } from './components/Header'
import { Post } from './components/Post'
import { saintsPhrase } from './components/Phrase'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'


function App() {
  
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
      author={saintsPhrase[0].author} 
      content={saintsPhrase[0].phrase} 
      />
      <Post 
      author={saintsPhrase[8].author} 
      content={saintsPhrase[8].phrase} 
      />
        </main>
      </div>

      
      
      
      
    </>
  )
}

export default App
