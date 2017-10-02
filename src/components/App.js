import React, { Component } from 'react';
import { connect } from 'react-redux';
import Matrix from './Matrix';
import Header from './Header';
import Footer from './Footer';
import Infos from './Infos';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

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
                            <PageHeader>Welcome to the tic tac toe game, play the game</PageHeader>
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
                <Footer />
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
