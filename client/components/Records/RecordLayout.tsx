import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { Record as rs } from '@/types/dummyDataTypes';
import { records } from '@/constants/dummyData';
import { getBills, initBills } from '@/services/Bills';

import BillBlock from './BillBlock';
import AddBillModal from './AddBillModal';
import { formatCurrency } from '@/services/Utils';


const RecordLayout = (props: any) => {
    const rid = props.rid;
    const record: rs = records[rid as string];

    const [showAddModal, setShowAddModal] = useState(false);
    const [bills, setBills] = useState(getBills(record.bids));


    useEffect(() => {
        initBills(record.bids);
        setBills(initBills(record.bids));
    }, [record]);


    const handleAddButton = () => {
        setShowAddModal((prev) => !prev);
    }

  return (
    <SafeAreaView className='relative h-full'>
        <View className='absolute scale-150 h-60 w-[100%] bg-[#429690] rounded-b-[50%] '/>
            <View className="items-center flex-row mt-20 pl-5">
                <View>
                    <Text className="text-2xl font-bold text-white">{record.title}</Text>
                    <Text className="text-sm text-white">Expenditure: ₹ {formatCurrency(record.netExpense)}</Text>
                </View>
                <View className='ml-auto mr-5 mb-1 items-center'>
                    <MaterialIcons name="people" size={42} color="white" />
                    <Text className="text-xs text-white">Access</Text>
                </View>
            </View>

            <ScrollView className='mt-10'>
                {record.bids.map((bid) => (
                    <BillBlock key={bid} bill={bills[bid]} rid={rid} />
                ))}
            </ScrollView>

            <Pressable
            className='absolute bottom-12 right-8 h-16 w-16 bg-[#429690] rounded-[50%] z-10 justify-center items-center'
            onPress={handleAddButton}  // Replace with actual navigation or action
            >
                <MaterialIcons name="add" size={35} color="#ffffff" />
            </Pressable>

            {showAddModal &&
                <AddBillModal modalButton={handleAddButton} />
            }
    </SafeAreaView>
  )
}
export default RecordLayout;