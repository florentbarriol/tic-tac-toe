import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTic } from '../actions';

import '../css/components/Square.css';

class Square extends Component {

    _onClick(e) {
        if (!this.props.isChecked) {
            this.props.dispatch(addTic(this.props.id));
        }
    }


    render() {
        const { display, isChecked, width } = this.props;
        return (
            <div className="square" style={{ width: `${width}%` }} onClick={this._onClick.bind(this)}>
                {isChecked && (
                    display
                )}
            </div>
        );
    }
}

Square.propTypes = {
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    display: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired

}

export default connect()(Square);
