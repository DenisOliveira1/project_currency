// https://exchangeratesapi.io/

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

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
           <View style={styles.result}>
              <Text style={{
                  fontSize: 20,
              }}>{`1,00 ${this.props.from} -> ${this.state.data} ${this.props.to} `}</Text>
           </View>
        )
     }
}


const styles = StyleSheet.create({

    result:{
      margin: 10,
      height: 50,
      width: 400,
      backgroundColor: "lightgreen",
      alignItems: "center",
      fontSize: 30,
      flexDirection: "row",
      justifyContent: "center",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "green"
    }
  
  });

export default Input