import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { CircleButton, SubInfo, NFTTitle, EthPrice, RectButton } from '../components'

const NFTCard = ({ data }) => {

  const navigation = useNavigation()

  return (
    <View style={tw`bg-white shadow-md rounded-md mb-8 mt-4 mx-4`}>
      <View style={tw`w-full h-80`}>
        <Image
          source={{ uri: data.image }}
          resizeMethod='cover'
          style={[tw`w-full h-full rounded-md`]} />

        <CircleButton right={10} top={10} />
      </View>

      <SubInfo people={data.bids} />

      <View style={tw`w-full p-4`}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
        />
      </View>

      <View style={tw`mt-1 flex-row justify-between items-center px-4 pb-4`}>
        <EthPrice price={data.price} />
        <RectButton
          minWidth={120}
          handlePress={() => navigation.navigate('Details', { data })} />
      </View>
    </View>
  )
}

export default NFTCard