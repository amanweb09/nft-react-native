import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS } from '../constants/colors'
import { CircleButton, RectButton, BackButton, SubInfo, DetailsBid, DetailsDesc, FocusedStatusBar } from '../components'
import React from 'react'
import tw from 'twrnc'

const DetailsHeader = ({ data, navigation }) => {
  console.log(navigation);
  return (
    <View style={tw`w-full h-96`}>
      <Image
        style={[tw`h-96`]}
        resizeMode='cover'
        source={{ uri: data.image }} />

      <BackButton handlePress={() => { navigation.goBack() }} />
    </View>
  )
}

const Details = ({ route, navigation }) => {

  const { params } = route
  const data = params.data

  return (
    <SafeAreaView style={tw`flex-1`}>
      <FocusedStatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor='transparent' />

      <View style={[
        tw`w-full absolute bottom-0 py-4 items-center bg-white/0.5`,
        { zIndex: '1' }]}>
        <RectButton minWidth={170} />
      </View>

      <FlatList
        data={data.bids}
        keyExtractor={(item) => { item.id }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-10`}
        ListHeaderComponent={<>
          <DetailsHeader data={data} navigation={navigation} />
          <SubInfo people={data.bids} />
          <View style={tw`p-4`}>
            <DetailsDesc data={data} />
          </View>

          {
            data.bids.length > 0 && (
              <Text style={tw`font-semibold px-4 mt-8 mb-4`}>Current Bid</Text>
            )
          }
        </>}
        renderItem={(item) => {
          return <DetailsBid
            bid={item} />
        }} />
    </SafeAreaView>
  )
}

export default Details