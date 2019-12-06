import React from 'react'
import {Text, View} from 'react-native'

import Input from './components/Input'

const App = () => {
  return (
    <View>
      <Text>Página inicial</Text>
      <Input from={"USD"} to={"BRL"}></Input>
    </View>
  )
}

export default App