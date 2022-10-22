import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { COLORS } from '../constants/colors'

const FocusedStatusBar = (props) => {

    const isFocused = useIsFocused()
    console.log(isFocused);

    return isFocused
        ? <StatusBar
            animated={true}
            {...props} />
        :
        null
}

export default FocusedStatusBar