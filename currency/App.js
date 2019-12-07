import React, {useState} from 'react'
import {Text, View, Picker, StyleSheet} from 'react-native'

import Input from './components/Input'

const App = () => {

  const currencies = {
    "Dólar Americano": "USD",
    "Real": "BRL",
    "Dólar de Hong Kong": "HKD",
    "Dólar Canadense": "CAD",
    "Euro": "EUR",
    "Rublo Russo ": "RUB",
    "Peso Filipino": "PHP",
    "Coroa Islandesa": "ISK",
    "Coroa dinamarquesa": "DKK",
    "Florim húngaro ": "HUF",
    "Coroa Tcheca": "CZK",
    "Libra Esterlina": "GBP",
    "Leu Romeno": "RON",
    "Coroa Sueca ": "SEK",
    "Rupia Indonésia": "IDR",
    "Rupia Indiana ": "INR",
    "Kuna Croata": "HRK",
    "Iene Japonês": "JPY",
    "Baht Tailandês ": "THB",
    "Franco Suíço": "CHF",
    "Ringgit Malaio": "MYR",
    "Lev Búlgaro": "BGN",
    "Lira Turca": "TRY",
    "Remimbi": "CNY",
    "Coroa Norueguesa": "NOK",
    "Dólar Neozelandês ": "NZD",
    "Rand Sul-Africano": "ZAR",
    "Peso Mexicano": "MXN",
    "Dólar Singapuriano": "SGD",
    "Dólar Australiano": "AUD",
    "Won Sul-Coreano": "KRW",
    "Zloty Polonês": "PLN"  
  }

  //states
  const [toParamether, setTo] = useState("USD");
  const [fromParamether, setFrom] = useState("USD");
  const [result, setResult] = useState(<Input from={fromParamether} to={toParamether}></Input>);

  const updateTo = (to) =>{
      setTo(to);
      setResult(<Input from={fromParamether} to={to}></Input>)
  }

  const updateFrom = (from1) =>{
      setFrom(from1);
      setResult(<Input from={from1} to={toParamether}></Input>)
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
        onValueChange={(itemValue, itemIndex) => {updateFrom(itemValue)}}>
          {getItems()}
        </Picker>

        <Picker
        selectedValue={toParamether}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {updateTo(itemValue)}}>
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
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: "100%",
    width: "100%"
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