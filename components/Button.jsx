import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/colors'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={[tw`w-10 h-10 bg-white absolute rounded-full items-center justify-center shadow-sm`, { ...props }]}
            onPress={handlePress}>
            <Ionicons name='heart' style={tw`text-xl text-red-500`} />
        </TouchableOpacity>
    )
}

export const BackButton = ({ handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={[tw`w-10 h-10 mt-1 ml-1 bg-white absolute rounded-full items-center justify-center shadow-sm`, { ...props }]}
            onPress={handlePress}>
            <Ionicons
                name='chevron-back'
                style={tw`text-xl`} />
        </TouchableOpacity>
    )
}

export const RectButton = ({ minWidth, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={[tw`w-10 h-10 p-2 bg-white rounded-full items-center justify-center shadow-sm`, { ...props, backgroundColor: COLORS.primary, minWidth }]}
            onPress={handlePress}>
            <Text style={tw`font-semibold text-white text-center`}>Place a Bid</Text>
        </TouchableOpacity>
    )
}