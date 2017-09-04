import React, { Component } from 'react';
import Square from './Square';
import _ from 'lodash';
import { connect } from 'react-redux';

class Matrix extends Component {
    render() {
        const { matrix, matrixSize, isWinning } = this.props;
        return (
            isWinning ? (
                <h1>Congratulations</h1>
            ) : (
                    <div className="grid-3">
                        {_.range(0, matrixSize).map((el, i) => {
                            return <Square
                                key={i}
                                id={i}
                                isChecked={matrix[i] !== undefined}
                                display={matrix[i] && matrix[i].piece ? matrix[i].piece : ''}
                            />
                        })}
                    </div>
                )

        );
    }
}

function mapStateToProps(state) {
    return {
        matrix: state.matrix,
        matrixSize: state.matrixSize,
        currentPlayer: state.currentPlayer,
        isWinning: state.isWinning
    }
}

export default connect(mapStateToProps)(Matrix);
