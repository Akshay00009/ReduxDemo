import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { increament, decreament, reset } from '../../actions/Redux'
import { connect } from 'react-redux'

class D extends Component {
    render() {
        return (
            <TouchableOpacity 
            onPress={() => this.resetCount()}
            style={{ flex: 1, backgroundColor: 'skyblue', margin: 10, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 19,  fontWeight: 'bold' }}>
                {this.props.val4}
               {/* {this.props.val4 == '2' ? '0': this.props.val4} */}
                </Text>
            </TouchableOpacity>
        )
    }
    resetCount(){
        this.props.reset()
    }
}

const mapStateToProps = (state) => {
    let { ReturnValue } = state.operation;
    let val4 = (ReturnValue + 2);
    return {
        val4,
    }
}
const mapDispatchToProps = {
    increament,
    decreament,
    reset
}


export default connect(mapStateToProps,mapDispatchToProps)(D)
