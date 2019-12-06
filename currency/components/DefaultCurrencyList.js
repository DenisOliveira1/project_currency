import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import moment from "moment";

import Input from './Input';

DefaultCurrencyList = () =>{

    const [lastUpdate, setLastUpdate] = useState('');
    const [isRendered, setRendered] = useState(false);
    var today = new Date();
    const date = moment(today).format("MMMM D, YYYY");

    if(isRendered == false) {
        setRendered(true);
        setLastUpdate(date);
            return (
                <ScrollView>
                    <Input from={"EUR"} to={"BRL"}></Input>
                    <Input from={"GBP"} to={"BRL"}></Input>
                    <Input from={"AUD"} to={"BRL"}></Input>
                    <Input from={"MXN"} to={"BRL"}></Input>
                    <Input from={"VEF"} to={"BRL"}></Input>
                </ScrollView>
            )
    }

}