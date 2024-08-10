import styles from './Post.module.css'

export function Post() {
    return (
            <article>
                <div className={styles.header}>
                    <div className={styles.author}>
                        <img src="https://avatars.githubusercontent.com/u/151173750?v=4" alt="" />
                        <div className={styles.authorInfo}>
                            <strong>Henrique Silva</strong>
                            <span>Jr. Web Developer</span>
                        </div>
                    </div>
                <div>
                    <time title="09 de agosto às 20h" dateTime="">Publicado há 1h</time>
                </div>
                </div>
                <div className={styles.textPost}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>
                        <a href="">👉 jane.design/doctorcare</a>
                    </p>
                    <p>
                        <a href="">#novoprojeto #nlw #rocketseat</a>
                    </p>
                </div>
                <div className={styles.comments}>
                    <strong>Deixe seu feedback</strong>
                    <textarea placeholder='Digite seu comentário'></textarea>
                    <button>Publicar</button>
                </div>
            </article>
    )
}