import styles from './Tweet.module.css'
import avatar from './assets/Avatar.png'; // Caminho da imagem
//import styles from './Header.module.css';
//import styles from './TextInput.module.css';

export default function Tweet(props) {
    return(
        <div className={styles.tweetContainer}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <div className={styles.user}>
                <span className={styles.userName}>Luciano Olegario</span>
                <span>@guii_olegario</span>
                <span>Há 12 horas</span>
            </div>
            <div className={styles.tweet}>
                {props.children}
            </div>
        </div>
    )
}