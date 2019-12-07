import React, {useState} from 'react'
import {Text, View, Picker} from 'react-native'

import Input from './components/Input'

const App = () => {

  const [toParamether, setTo] = useState("");
  const [fromParamether, setFrom] = useState("");

  const updateTo = (to) =>{
      setTo(to);
  }

    const updateFrom = (from) =>{
      setFrom(from)
      renderResponse(fromParamether, toParamether);
  }

  const renderResponse = (to, from) =>{
    return(
    <View>
      <Input from={from} to={to}></Input>
    </View>
    )
  }

  return (
    <View>
      <Text>Página inicial</Text>

  <Picker
  selectedValue={fromParamether}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    updateFrom(itemValue)
  }>
  <Picker.Item label="Dolar Americano" value="USD" />
  <Picker.Item label="Real" value="BRL" />
</Picker>

<Picker
  selectedValue={toParamether}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    updateTo(itemValue)
  }>
  <Picker.Item label="Dolar Americano" value="USD" />
  <Picker.Item label="Real" value="BRL" />
</Picker>
    {renderResponse(toParamether, fromParamether)}
    </View>
  )
}

export default App