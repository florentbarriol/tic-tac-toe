import React, { Component } from 'react';
import { connect } from 'react-redux';
import Matrix from './Matrix';
import Header from './Header';
import Footer from './Footer';
import Infos from './Infos';
import PlayerForm from './PlayerForm';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import _ from 'lodash';

import '../css/styles.css';

class App extends Component {

    render() {
        const { idCurrentPlayer, players } = this.props;
        const playersArray = _.values(players);
        return (
            <main>
                <Header />
                {_.isEmpty(players) || playersArray.length < 2 ? (
                    <Grid>
                        <Row>
                            <Col md={12}>
                                <PageHeader>First, enter the name of the player n°{_.values(players).length + 1} :</PageHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <PlayerForm
                                    dispatch={this.props.dispatch}
                                    players={playersArray}
                                     />
                            </Col>
                        </Row>
                    </Grid>
                ) : (
                        <Grid>
                            <Row>
                                <Col md={12}>
                                    <PageHeader>Now play the tic tac toe game</PageHeader>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <Matrix />
                                </Col>
                                <Col md={4}>
                                    <Infos
                                        idCurrentPlayer={idCurrentPlayer}
                                        players={players} />
                                </Col>
                            </Row>
                        </Grid>
                    )}
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
