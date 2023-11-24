import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <p> Created by <a href="https://github.com/Lyped">Lyped</a> on GitHub</p>
            </div>
            <div className={styles.block}>
                <p>On the time im making this I'm 21 years old</p>
            </div>
            <div className={styles.block}>
                <p>I'm from Latvia</p>
            </div>
            <div className={styles.block}>
                <p>I made this for testing my skills in React.js</p>
            </div>
            <div className={styles.block}>
                <p>Hope you like this project, you can also share your thoughts with me about it</p>
            </div>
        </div>
    )
}
