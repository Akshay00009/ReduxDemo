import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { increament, decreament, reset } from '../../actions/Redux'
import { connect } from 'react-redux'

class C extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'orange', margin: 10, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 19,  fontWeight: 'bold' }}>{this.props.val3}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    let { ReturnValue } = state.operation;
    let val3 = Math.pow(ReturnValue, 3);
    return {
        val3,
    }
}

export default connect(mapStateToProps)(C)
