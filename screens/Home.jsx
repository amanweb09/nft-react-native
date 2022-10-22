import { View, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components'
import { COLORS } from '../constants/colors'
import { NFTs } from '../constants/NFT'

const Home = () => {

    const [nftData, setNftData] = useState(NFTs)

    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTs)

        const filteredData = NFTs.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })

        if(filteredData.length) {
            setNftData(filteredData)
        }
        else {
            setNftData(NFTs)
        }
    }

    return (
        <SafeAreaView style={tw`flex flex-1`}>
            <FocusedStatusBar barStyle="dark-content" background={COLORS.primary} />

            <View style={tw`flex-1`}>
                <View style={{ zIndex: '0' }}>
                    <FlatList
                        data={nftData}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                        renderItem={(item) => {
                            return <NFTCard data={item.item} />
                        }} />
                </View>

                <View style={[tw`absolute inset-0`, { zIndex: '-1' }]}>
                    <View style={[tw`h-64`, { backgroundColor: COLORS.primary }]}></View>
                    <View style={[tw`flex-1 bg-white`]}></View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home