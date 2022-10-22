import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from '../components/SubInfo'
import tw from 'twrnc'

const DetailsDesc = ({ data }) => {

    const [text, setText] = useState(data.description.slice(0, 100))
    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <View style={tw`w-full flex-row justify-between items-center`}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator} />


                <EthPrice price={data.price} />
            </View>
            <View style={tw`mt-10`}>
                <Text style={tw`font-semibold`}>Desciption</Text>
            </View>

            <View style={tw`mt-2`}>
                <Text style={[tw`text-sm text-gray-500`]}>
                    {text}
                    {!readMore && '...'}
                </Text>
            </View>
        </>
    )
}

export default DetailsDesc