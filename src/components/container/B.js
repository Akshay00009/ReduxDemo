import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { increament, decreament, reset } from '../../actions/Redux'
import { connect } from 'react-redux'

class B extends Component {
    render() {
        return (
            <TouchableOpacity 
            onPress={() => this.decreamentCount()}
            style={{ flex: 1, backgroundColor: 'tomato', margin: 10, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                <Text style={{fontSize: 19,  fontWeight: 'bold'}}>{this.props.val2}</Text>
            </TouchableOpacity>
        )
    }

    decreamentCount() {
        this.props.decreament()
    }
}

const mapStateToProps = (state) => {
    let { ReturnValue } = state.operation;
    let val2 = Math.pow(ReturnValue, 2);
    return {
        val2,
    }
}

const mapDispatchToProps = {
    increament,
    decreament,
    reset
}


export default connect(mapStateToProps,mapDispatchToProps)(B)
