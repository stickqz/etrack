import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { formatCurrency, formatDate } from '@/services/Utils';

import BillBlock from './BillBlock';
import AddBillModal from './AddBillModal';
import { ThreeDotMenu } from './Menu';
import { deleteRecord } from '@/store/thunks';

const RecordLayout = (props: any) => {
    const rid = props.rid;
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const record = useSelector((state: RootState) => state.records.records[rid]);
    const { allBills: bills } = useSelector((state: any) => state.bills);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showOpts, setShowOpts] = useState(false);


    const handleAddButton = () => {
        setShowAddModal((prev) => !prev);
    }


    const handleOptsButton = () => {
        setShowOpts((prev) => !prev);
    }

    const onPressDelete = () => {
        dispatch(deleteRecord(rid));
        setShowOpts(false);
        router.replace('/dashboard');
    }

    return (
        <SafeAreaView className='relative h-full'>
            <View className='absolute scale-150 h-60 w-[100%] bg-[#429690] rounded-b-[50%] ' />
            <View className="items-center justify-between flex-row mt-20 px-5">
                <View>
                    <Text className="text-2xl font-bold text-white">{record.title}</Text>
                    <Text className="text-sm text-white">Expenditure: ₹ {formatCurrency(record.netAmount)}</Text>
                </View>

                <Pressable onPress={handleOptsButton} className='p-1'>
                    <Entypo name="dots-three-vertical" size={28} color="white" />
                </Pressable>
            </View>

            <View className='pl-5 pt-3'>
                <Text className='text-sm text-white'>Last Modified: {formatDate(record.lastEdited)}</Text>
            </View>

            {bills && Object.keys(bills).length !== 0 &&
                <ScrollView className='mt-6'>
                    {record.bids.map((bid) => {
                        const bill = bills[bid];
                        if (!bill) return null; // Skip if the bill isn't loaded yet
                        return <BillBlock key={bid} bill={bill} rid={rid} />;
                    })}
                </ScrollView>
            }

            <Pressable
                className='absolute bottom-12 right-8 h-14 w-36 bg-[#429690] rounded-2xl z-10 justify-center items-center flex-row gap-3'
                onPress={handleAddButton}
            >
                <MaterialIcons name="format-list-bulleted" size={20} color="#ffffff" />
                <Text className='text-white text-xl'>Add Bill</Text>
            </Pressable>

            {showAddModal &&
                <AddBillModal rid={rid} modalButton={handleAddButton} />
            }

            {showOpts && (
                <ThreeDotMenu
                    options={[{
                        label: 'Edit Record',
                        onPress: () => {
                            setShowOpts(false);
                        }
                    },
                    {
                        label: 'Delete Record',
                        onPress: onPressDelete
                    }]}
                    toggleMenu={handleOptsButton}
                />
            )}
        </SafeAreaView>
    )
}
export default RecordLayout;