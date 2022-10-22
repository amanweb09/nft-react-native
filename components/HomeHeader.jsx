import { View, Text, Image, TextInput } from 'react-native'
import { COLORS } from '../constants/colors'
import tw from 'twrnc'
import { FontAwesome5 as FA } from '@expo/vector-icons'

const HomeHeader = ({onSearch}) => {
  return (
    <View style={[
      tw`p-4`,
      { backgroundColor: COLORS.primary }
    ]}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center`}>
          <FA name="bitcoin" color={'#fff'} size={30} />
          <Text style={tw`text-white font-bold text-xl ml-2`}>ProNFT</Text>
        </View>

        <Image
          style={tw`w-10 h-10 rounded-full border-2 border-solid border-pink-200`}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokCzP1tXdx7rvZ7B262AlVpziE7r7O_R36w&usqp=CAU' }} />
      </View>

      <View style={tw`mb-4 mt-6`}>
        <Text style={tw`text-sm text-white`}>Hello, Aman</Text>
        <Text style={tw`font-bold text-lg mt-1 text-white`}>Let's Find a Masterpiece</Text>
      </View>

      <View style={tw`mt-4`}>
        <View style={[
          tw`w-full rounded-md flex-row items-center px-4 py-2`,
          { backgroundColor: COLORS.gray }]}>
          <FA name="search" style={tw`text-xl text-white mr-2`} />
          <TextInput
            placeholder='Search NFTs'
            style={tw`flex-1`}
            onChangeText={(e) => { onSearch(e) }} />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader