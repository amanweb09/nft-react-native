import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { COLORS } from '../constants/colors'
import { FontAwesome5 as FA } from '@expo/vector-icons'

export const NFTTitle = ({ title, subTitle }) => {
    return (
        <View>
            <Text style={[tw`font-bold text-lg`, { color: COLORS.primary }]}>{title}</Text>
            <Text style={[tw`text-sm text-gray-600`, {}]}>{subTitle}</Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View style={tw`flex-row items-center`}>
            <FA 
            name="ethereum" 
            size={30} 
            color='#000'
            style={tw`mr-1`}/>
            <Text style={tw`text-lg`}>{price}</Text>
        </View>
    )
}

export const ImageCmp = ({ uri, index }) => {
    return (
        <Image
            resizeMode="contain"
            source={{ uri }}
            style={[tw`w-10 h-10 rounded-full border-2 border-solid border-pink-200`, { marginLeft: index === 0 ? 0 : -10 }]} />
    )
}

export const People = ({ people }) => {
    return (
        <View style={tw`flex-row`}>
            {
                people.map((person, index) => {
                    return <ImageCmp
                        index={index}
                        key={person.id}
                        uri={person.image} />
                })
            }
        </View>
    )
}

export const EndDate = () => {
    return (
        <View style={tw`px-4 py-2 bg-white items-center justify-center shdaow-sm max-w-1/2`}>
            <Text style={[
                tw`text-sm`, {
                    color: COLORS.primary
                }]}>
                Ending in
            </Text>

            <Text style={[
                tw`text-lg font-semibold`, {
                    color: COLORS.primary
                }]}>
                12h 30m
            </Text>
        </View>
    )
}

export const SubInfo = ({ people }) => {
    return (
        <View style={tw`w-full px-4 -mt-8 flex-row justify-between`}>
            <People people={people} />
            <EndDate />
        </View>
    )
}
