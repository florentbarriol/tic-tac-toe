import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { addPlayer } from '../actions';
import _ from 'lodash';
import { FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';

const NB_MIN_CHAR = 3;
const ICONS = ['♕', '✰', '✔', '	✘', '♂', '♀', '♪', '☺'];
const initialState = {
    name: '',
    piece: ''
}

class PlayerForm extends Component {

    constructor(props) {
        super(props);
        this.state = _.clone(initialState)
    }

    validationName() {
        return this.state.name && this.state.name.length >= NB_MIN_CHAR;
    }

    validationPiece() {
        return this.state.piece;
    }

    validationState() {
        return this.validationName() && this.validationPiece();
    }

    handleNameOnChange(e) {
        if (e && e.target) {
            this.setState({ name: e.target.value });
        }
    }

    handlePieceOnChange(e) {
        if (e && e.target) {
            this.setState({ piece: e.target.value });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.validationState()) {
            this.props.dispatch(addPlayer(this.state));
            this.setState(_.clone(initialState));
        }
    }

    render() {
        const { players } = this.props;
        const iconsAlreadyused = _.isEmpty(players) ? [] : _.reduce(players, (res, curr, key) => {
            if (curr.piece && _.indexOf(res, curr.piece) === -1) {
                res.push(curr.piece)
            }
            return res;
        }, []);
        const possibleIcons = _.filter(ICONS, (curr) => _.indexOf(iconsAlreadyused, curr) < 0);
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <FormGroup validationState={this.validationName() ? 'success' : 'error'}>
                    <ControlLabel>Player name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Enter the player name"
                        onChange={this.handleNameOnChange.bind(this)}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>must be at least {NB_MIN_CHAR} characters.</HelpBlock>
                </FormGroup>
                <FormGroup validationState={this.validationPiece() ? 'success' : 'error'}>
                    <ControlLabel>Select</ControlLabel>
                    <FormControl
                        componentClass="select"
                        placeholder="Choose a piece..."
                        onChange={this.handlePieceOnChange.bind(this)}
                        value={this.state.piece}>
                        <option value="">Choose a piece...</option>
                        {possibleIcons.map((icon, i) => {
                            return <option key={i} value={icon}>{icon}</option>
                        })}
                    </FormControl>
                </FormGroup>
                <div> <Button type="submit" disabled={!this.validationState()}>OK</Button></div>
            </form>
        );
    }
}

PlayerForm.Proptypes = {
    players: Proptypes.array.isRequired
}

export default PlayerForm;
