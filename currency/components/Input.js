// https://exchangeratesapi.io/

import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }


    config = {
        method: "GET",
        success: response => response.rates[this.props.to],
        error: error => console.error(error)
    }


     update() {
        fetch(`https://api.exchangeratesapi.io/latest?base=${this.props.from}`, {method: this.config.method})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: this.config.success(responseJson).toFixed(2)
            })
        })
        .catch((error) => {
            this.config.error(error)
        })
    }

  componentDidUpdate() {
      this.update();
    }

    componentWillMount() {
      this.update();
    }

    render() {
        return (
           <View style={styles.result}>
      
              <Text style={{
                  fontSize: 20,
              }}>{`1.00 ${this.props.from} -> ${this.state.data} ${this.props.to} `}</Text>
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