import React, { Component } from 'react';
import { connect } from 'react-redux';
import Matrix from './Matrix';
import Header from './Header';
import Infos from './Infos';
import { Grid, Row, Col } from 'react-bootstrap';

import '../css/styles.css';

class App extends Component {

    render() {
        const { idCurrentPlayer, players } = this.props;
        return (
            <main>
                <Header />
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h1>Play the game</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Matrix />
                        </Col>
                        <Col md={2}>
                            <Infos
                                idCurrentPlayer={idCurrentPlayer}
                                players={players} />
                        </Col>
                    </Row>
                </Grid>
            </main>
        );
    }
}
function mapStateToProps(state) {
    return {
        idCurrentPlayer: state.idCurrentPlayer,
        winner: state.winner,
        players: state.players
    }
}

export default connect(mapStateToProps)(App);
