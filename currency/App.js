import React, {useState} from 'react'
import {Text, View, Picker, StyleSheet} from 'react-native'

import Input from './components/Input'

const App = () => {

  const currencies = {
    "Dólar Americano": "USD",
    "Real": "BRL",
    "Dólar de Hong Kong": "HKD",
    "Dólar canadense": "CAD",
    "Euro": "EUR"
  }

  //states
  const [toParamether, setTo] = useState("USD");
  const [fromParamether, setFrom] = useState("USD");
  const [result, setResult] = useState(<Input from={fromParamether} to={toParamether}></Input>);

  const updateTo = (to) =>{
      setTo(to);
      setResult(<Input from={fromParamether} to={toParamether}></Input>)
  }

  //functions
  const updateFrom = (from) =>{
      setFrom(from)
      setResult(<Input from={fromParamether} to={toParamether}></Input>)
  }

  const getItems = () =>{
    let items = []
    for(let i in currencies){
      items.push(<Picker.Item label={i} value={currencies[i]} key={currencies[i]}/>)
    }
    return items
  }

  //return
  return (
    
    <View style={styles.main}>
        
      <Text style={{
        fontSize: 40,
        marginBottom: 30,
        marginTop: 30,
        fontStyle: "italic",
        }}>Conversor</Text>

      <View style={styles.pickers}>
        <Picker
        selectedValue={fromParamether}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => updateFrom(itemValue)}>
          {getItems()}
        </Picker>

        <Picker
        selectedValue={toParamether}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => updateTo(itemValue)}>
          {getItems()}
        </Picker>
      </View>

      {result}

      <Text>{fromParamether}</Text>
      <Text>{toParamether}</Text>

    </View>
  )
}

const styles = StyleSheet.create({

  main: {
    alignItems: "center",
    backgroundColor: "lightblue",
    height: "100%",
  },

  picker: {
    margin: 10,
    height: 50,
    width: 400,
    backgroundColor: "white",
  },  

  pickers: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

});

export default App