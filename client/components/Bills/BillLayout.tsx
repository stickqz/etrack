import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons';

import { Bill } from '@/types/dataTypes';
import { formatCurrency, formatDate } from '@/services/Utils';
import CustomModal from '../CustomModal';
import { AppDispatch } from '@/store/store';
import { deleteBill } from '@/store/thunks';


const BillLayout = (props: any) => {
    const bills = useSelector((state: any) => state.bills.allBills);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const { bid } = props;
    const bill: Bill = bills[bid];


    const handleDelete = () => {
        dispatch(deleteBill(bill.id));
        setShowModal(false);
        router.replace(`/${bill.rid}`);
    };

    return (
        <SafeAreaView className='relative h-full'>
        <View className='scale-150 absolute h-60 w-[100%] bg-[#429690] rounded-b-[50%] '/>
            <View className="items-center flex-row mt-20 pl-5">
                <View>
                    <Text className="text-2xl font-bold text-white">Bill Details</Text>
                    <Text className="text-s text-slate-300 mt-3">{bill.name}</Text>
                    <Text className="text-sm text-slate-300">Amount: ₹ {formatCurrency(bill.amount)}</Text>
                </View>
                <View className='ml-auto mr-5 mb-1 items-center'>
                    <MaterialIcons name="person" size={42} color="white" />
                    <Text className="text-xs text-slate-300">Members</Text>
                </View>
            </View>
            <View className='mt-6 p-5 bg-[#f2f2f2] rounded-t-[30px]'>
                <View className='p-5'>
                    <Text className='text-lg text-slate-500'>Date: {formatDate(bill.date)}</Text>
                    <Text className='text-lg text-slate-500'>Added By: {bill.addedby}</Text>
                    <Text className='text-lg text-slate-500'>Edited By: {bill.editedby}</Text>
                    <Text className='text-lg text-slate-500'>Edited At: {formatDate(bill.editedAt)}</Text>
                    <Text className='text-lg text-slate-500'>Description: {bill.description}</Text>
                    <Text className='text-lg text-slate-500'>Paid By: {bill.paidBy}</Text>
                    <Text className='text-lg text-slate-500'>Shared By: {bill.sharedby.join(', ')}</Text>
                </View>
            </View>
            <View className='bg-primary h-20 mt-auto rounded-2xl mx-2 flex-row'>
                <View className='flex-1 justify-center items-center'>
                    <MaterialIcons name="edit" size={24} color="grey" />
                    <Text className='text-white text-sm'>Edit</Text>
                </View>
                <Pressable className='flex-1 justify-center items-center' onPress={() => setShowModal(true)}>
                    <MaterialIcons name="delete" size={24} color="white" />
                    <Text className='text-white text-sm'>Delete</Text>
                </Pressable>
            </View>
            <CustomModal
                visible={showModal} // Replace with actual state to control modal visibility
                message={'Are you sure you want to delete this bill?'}
                onAccept={handleDelete}
                onReject={() => setShowModal(false)}
                acceptText='Delete'
                rejectText='Cancel'
                onClose={() => setShowModal(false)}
                />
     </SafeAreaView>
    );
}


export default BillLayout;