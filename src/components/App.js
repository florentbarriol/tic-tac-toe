import React, { Component } from 'react';
import Matrix from './Matrix';

import styles from '../css/styles.css';

class App extends Component {

    render() {
        return (
            <div className={styles.App}>
                <h1 className={styles.AppIntro}>Play the game</h1>
                <section className={styles.TheGame}>
                    <Matrix />
                </section>
            </div>
        );
    }
}

export default App;
