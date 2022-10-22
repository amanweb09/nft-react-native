import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice } from './SubInfo'
import tw from 'twrnc'

const DetailsBid = ({ bid }) => {

    console.log(bid);

    return (
        <View style={tw`w-full flex-row items-center justify-between px-4 mb-2`}>
            <Image
                style={tw`w-12 h-12 rounded-full border-2 border-solid border-pink-200`}
                source={{ uri: bid.item.image }}
                resizeMode="contain" />

            <View>
                <Text style={tw`font-semibold text-sm`}>Bid placed by {bid.item.name}</Text>
                <Text style={tw`font-semibold mt-1 text-xs text-gray-400`}>{bid.item.date}</Text>
            </View>

            <EthPrice price={bid.item.price} />
        </View>
    )
}

export default DetailsBid