import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { increament, decreament, reset } from '../../actions/Redux'
import { connect } from 'react-redux'

class A extends Component {
    render() {
        return (
            <TouchableOpacity
             onPress={() => this.increamentCount()}
             style={{ flex: 1, backgroundColor: 'pink', margin: 10, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 19,  fontWeight: 'bold' }}>{this.props.ReturnValue}</Text>
            </TouchableOpacity>
        )
    }

    increamentCount() {
        this.props.increament()
    }
}

const mapStateToProps = (state) => {
    let { ReturnValue } = state.operation;
    return {
        ReturnValue,
    }
}

const mapDispatchToProps = {
    increament,
    decreament,
    reset
}


export default connect(mapStateToProps,mapDispatchToProps)(A)
