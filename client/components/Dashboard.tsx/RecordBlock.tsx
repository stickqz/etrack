import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { MaterialIcons } from '@expo/vector-icons';

import { Record } from '@/types/dataTypes';
import { formatCurrency } from '@/services/Utils';


const RecordBlock = (props : any) => {
    const record : Record = props.record;

    return (
        <View className='flex-row  items-center justify-between p-5 bg-primary rounded-xl m-5' >
            <Link href={{ pathname: '/(app)/[rid]', params: { rid: record.id}}} className='flex-1'>
                <View className='flex justify-between'>
                    <Text className='text-xl font-bold text-white'>{record.title}</Text>
                    <Text className='text-sm text-white mt-5'>Net Expense: ₹ {formatCurrency(record.netExpense)}</Text>
                </View>
            </Link>
            <MaterialIcons name="delete" size={24} color="white" />
        </View>
    )
}
export default RecordBlock;