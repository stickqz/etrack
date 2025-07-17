import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import RecordBlock from '@/components/Dashboard.tsx/RecordBlock';
import { user } from '@/constants/dummyData';
import { useEffect } from 'react';
import { getRecords, initRecords, } from '@/services/Records';
import { Records } from '@/types/dummyDataTypes';

const DashboardLayout = () => {
    const { name, rids } = user;

    useEffect(() => {
        initRecords(rids);
    }, [rids]);

    const records: Records = getRecords(rids);

    return (
        <SafeAreaView className=''>
            <View className='scale-150 absolute h-60 w-[100%] bg-[#429690] rounded-b-[50%] '/>
            <View className="items-center flex-row mt-20 pl-5">
                <View>
                    <Text className="text-sm text-white">Good Morning,</Text>
                    <Text className="text-2xl font-bold text-white">{name}</Text>
                </View>
                <View className='ml-auto mr-5'>
                    <MaterialIcons name="add-box" size={42} color="white" />
                </View>
            </View>

            <ScrollView className='mt-10'>
                {rids.map((rid) => (
                    <RecordBlock key={rid} record={records[rid]} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashboardLayout;
