import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { increament, decreament, reset } from '../../actions/Redux'
import { connect } from 'react-redux';
import A from './A'
import B from './B'
import C from './C'
import D from './D'


class RenderView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{top :18,height: 100, backgroundColor: 'lightblue', justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 19,  fontWeight: 'bold' }}>Total :- { this.props.ReturnValue + this.props.val2 + this.props.val3 + this.props.val4}</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <A/>
                        <B/>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <C/>
                        <D/>
                    </View>

                </View>

                <View style={{ height: 100, backgroundColor: 'lightgray', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.increamentCount()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', margin: 5, height: 50, borderRadius: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.decreamentCount()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', margin: 5, height: 50, borderRadius: 5 }}

                    >
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Substract</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.resetCount()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', margin: 5, height: 50, borderRadius: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Reset</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    increamentCount() {
        this.props.increament()
    }

    decreamentCount() {
        this.props.decreament()
    }

    resetCount() {
        this.props.reset()
    }
}

const mapStateToProps = (state) => {
    let { ReturnValue } = state.operation;
    let val2 = Math.pow(ReturnValue, 2);
    let val3 = Math.pow(ReturnValue, 3);
    let val4 = (ReturnValue + 2);
    return {
        ReturnValue,
        val2,
        val3,
        val4
    }
}

const mapDispatchToProps = {
    increament,
    decreament,
    reset
}
export default connect(mapStateToProps, mapDispatchToProps)(RenderView)
