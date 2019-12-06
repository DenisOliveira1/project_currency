// https://exchangeratesapi.io/

import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Input extends Component {
    config = {
        method: "GET",
        url: `https://api.exchangeratesapi.io/latest?base=${this.props.from}`,
        success: response => response.rates[this.props.to],
        error: error => console.error(error)
    }

    state = {
        data: ""
    }

    componentDidMount = () => {
        fetch(this.config.url, {method: this.config.method})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: this.config.success(responseJson)
            })
        })
        .catch((error) => {
            this.config.error(error)
        })
    }

    render() {
        return (
           <View>
              <Text>{`Resposta:  ${this.state.data}`}</Text>
           </View>
        )
     }
}

export default Input