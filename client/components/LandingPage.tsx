import { View, Text, Pressable, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { icons } from '@/constants/icons';

const LandingPage = () => {
    return (
        <SafeAreaView className="flex-col items-center justify-center">
            <View className="relative w-full h-[83%]">
                <ImageBackground
                    source={icons.Background}
                    className="absolute top-0 w-full h-[700px]"
                    resizeMode="cover"
                />
                <Image
                    source={icons.person}
                    className="absolute top-20 w-[380px] h-[600px]"
                    resizeMode="contain"
                />
                <Image
                    source={icons.Coint}
                    className="absolute top-32 left-8 w-24 h-24"
                    resizeMode="contain"
                />
                <Image
                    source={icons.Donut}
                    className="absolute top-48 left-80 w-24 h-24"
                    resizeMode="contain"
                />
            </View>
            <View className="flex items-center mt-auto px-2 w-full">
                <Text className="text-3xl font-bold text-[#438883] text-center mb-6 w-3/5">
                    Spend Smarter Save More
                </Text>
                <Pressable
                    className="bg-[#438883] rounded-full w-3/5 h-14 items-center justify-center"
                    onPress={() => router.push('/(app)/dashboard')}
                >
                    <Text className="text-white text-lg font-semibold">Get Started</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
};

export default LandingPage;
