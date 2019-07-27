import React, { Component } from 'react';
import {connect} from 'react-redux';


class NextMonth extends Component {
    // componentWillReceiveProps(nextProps){
    //     if (nextProps.emailFromProps){
    //         this.props.unshift(nextProps)
    //     }
    // }

    render() {
        
        return (
            <div>
                <h1>Next Month: {this.props.emailFromProps}</h1>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    emailFromProps: state.emailInput.email
});

export default connect(mapStateToProps)(NextMonth)