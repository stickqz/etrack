import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppDispatch } from '@/store/store';

import { MaterialIcons } from '@expo/vector-icons';
import RecordBlock from '@/components/Dashboard.tsx/RecordBlock';
import AddRecordModal from '@/components/Dashboard.tsx/AddRecordModal';
import { fetchUser } from '@/store/thunks';


const DashboardLayout = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { name, rids, uid } = useSelector((state: any) => state.user);
    const { records } = useSelector((state: any) => state.records);
    const [showAddModal, setShowAddModal] = useState(false);


    useEffect(() => {
            dispatch(fetchUser());
    }, [dispatch]);


    const handleAddButton = () => {
        setShowAddModal((prev) => !prev);
    }

    return (
        <SafeAreaView className='relative h-full'>
            <View className='scale-150 absolute h-60 w-[100%] bg-[#429690] rounded-b-[50%] '/>
            <View className="items-center flex-row mt-20 pl-5">
                <View>
                    <Text className="text-sm text-white">Good Morning,</Text>
                    <Text className="text-2xl font-bold text-white">{name || ""}</Text>
                </View>
                <Pressable className='ml-auto mr-5' onPress={handleAddButton}>
                    <MaterialIcons name="add-box" size={42} color="white" />
                </Pressable>
            </View>

            { records && Object.keys(records).length !== 0 && rids?.length &&
             <ScrollView className='mt-10'>
                {rids.map((rid: string) => (
                    <RecordBlock key={rid} record={records[rid]} />
                ))}
            </ScrollView>
            }

            { showAddModal &&
                <AddRecordModal uid={uid} modalButton={handleAddButton} />
            }

        </SafeAreaView>
    )
}

export default DashboardLayout;
