import React from 'react';
import avatar from './assets/Avatar.png'; // Caminho da imagem
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Meu Tweet</h1>
            <nav className={styles.nav}>
            </nav>
            <div>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
            </div>
        </header>
    );
}
