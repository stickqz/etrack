import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { getBill } from '@/services/Bills';
import { Bill } from '@/types/dummyDataTypes';
import { formatCurrency, formatDate } from '@/services/Utils';

const BillLayout = (props: any) => {
    console.log("Bill ID", props.bid);
    const { bid } = props;

    const bill: Bill = getBill(bid)

    return (
        <SafeAreaView>
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
     </SafeAreaView>
    );
}


export default BillLayout;