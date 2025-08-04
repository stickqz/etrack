import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { Bill } from '@/types/dataTypes';
import { formatCurrency } from '@/services/Utils';


const BillBlock = (props:any) => {
    const rid = props.rid;
    const bill: Bill = props.bill;

    return (
        <View className='flex-row  items-center justify-between p-5 bg-[#1B5C58] rounded-2xl mx-5 my-1' >
            <Link href={{ pathname: './[rid]/[bid]', params: { rid, bid: bill.id } }} className='flex-1'>
                <View className='flex justify-between'>
                    <Text className='text-xl font-bold text-white'>{bill.name}</Text>
                    <Text className='text-sm text-white mt-5'>Expense: ₹ {formatCurrency(bill.amount)}</Text>
                </View>
            </Link>
            <View className='flex-row items-center justify-between gap-8'>
            </View>
        </View>
    )
}
export default BillBlock;