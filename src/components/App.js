import React, { Component } from 'react';
import logo from '../logo.svg';
import Matrix from './Matrix';

import styles from '../css/styles.css';

class App extends Component {

    render() {
        return (
            <div className={styles.App}>
                <div className={styles.AppHeader}>
                    <img src={logo} className={styles.AppLogo} alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className={styles.AppIntro}>Play the game </p>
                <section className={styles.TheGame}>
                    <Matrix />
                </section>
            </div>
        );
    }
}

export default App;
