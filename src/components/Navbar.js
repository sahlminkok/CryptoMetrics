import React from 'react';
import microphone from '../assets/microphone.svg';
import settings from '../assets/settings.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <header>
    <nav>
      <div className={styles.logo}>
        <h1>CryptoMetrics</h1>
      </div>
      <ul className={styles.iconsList}>
        <li>
          <a href="/">
            <img src={microphone} className={styles.mic} alt="Microphone" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={settings} className={styles.sett} alt="Microphone" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
