import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTic } from '../actions';

import styles from '../css/Square.css';

class Square extends Component {

    _onClick(e) {
        if (!this.props.isChecked) {
            this.props.dispatch(addTic(this.props.id));
        }
    }


    render() {
        const { display, isChecked } = this.props;
        return (
            <div className={`${styles.square} flex-container-v`} onClick={this._onClick.bind(this)}>
                {isChecked && (
                    display
                )}
            </div>
        );
    }
}

Square.propTypes = {
    id: PropTypes.number.isRequired,
    isChecked: PropTypes.bool,
    display: PropTypes.string.isRequired

}

export default connect()(Square);
