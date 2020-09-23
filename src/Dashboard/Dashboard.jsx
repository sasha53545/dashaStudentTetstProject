import React from 'react';
import {decrementAction, incrementAction, resetAction} from "../reducer/action";
import {connect} from 'react-redux'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickIncrement = () => {
        this.props.increment();
    };

    onClickDecrement = () => {
        this.props.decrement();
    };

    render() {
        return (
            <div>
                <button onClick={this.onClickDecrement}>-</button>
                {this.props.count}
                <button onClick={this.onClickIncrement}>+</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(incrementAction()),
        decrement: () => dispatch(decrementAction()),
        reset: () => dispatch(resetAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
