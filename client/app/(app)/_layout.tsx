import { Slot } from 'expo-router'
import { View } from 'react-native'
const AppLayout = () => {
  return (
    <View>
      <Slot />
    </View>
  )
}
export default AppLayout