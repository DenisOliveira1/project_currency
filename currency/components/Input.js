// https://exchangeratesapi.io/

import React from 'react'
import {Text, View} from 'react-native'

const request = config => {    
    return fetch(config.url, config.method)
    .then(response => response.json())
    .then(response => config.success(response))
}

const Input = props => {
    const config = {
        method: "GET",
        url: `https://api.exchangeratesapi.io/latest?base=${props.from}`,
        success: response => response.rates[props.to]
    }

    request(config).then(value => {
        // 1. o valor fica preso na promisse
        {console.log(value)}
    })

    return (
        // 2. ele deveria ser colocado no return do componente
        <View><Text>{`Resposta: `}</Text></View>
    )
}

export default Input;