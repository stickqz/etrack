import { View, Text, TextInput, Pressable, Platform } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';


import { formatCurrency, formatDate } from '@/services/Utils';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { createBill } from '@/store/thunks';
import { AppDispatch } from '@/store/store';


interface Props {
    modalButton: () => void;
    rid: string;
}

const AddBillModal = ({ modalButton, rid }: Props) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0.00);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const dispatch = useDispatch<AppDispatch>();


    const handleAmount = (text: string) => {
        text = text.replace(/[^0-9]/g, '');

        const amt = parseInt(text, 10) || 0;
        setAmount(amt);
    };


    const togglePicker = () => {
        setShowPicker((prev) => !prev);
    }


    const onDateChange = (event: any, selectedDate?: Date) => {
        if (event.type === 'set') {
            if (selectedDate)
                setDate(selectedDate)

            if (Platform.OS === 'android') {
                togglePicker();
                setDate(selectedDate || new Date());
            }
        } else
            togglePicker();
    };


    const handleSubmit = async () => {
        const bill = {
            name,
            amount,
            description,
            dateTime: date.toISOString(),
            rid
        }
        dispatch(createBill(bill));

        modalButton();
    };


    return (
        <Pressable
            className='absolute bottom-0 left-0 right-0 h-full justify-center items-center z-10'
            onPress={modalButton}
        >
            <View className='absolute bottom-0 right-0 h-5/6 w-full bg-white p-5 rounded-3xl' onStartShouldSetResponder={() => true}>
                <View className='container flex-col h-full'>
                    <Text className='text-center text-2xl font-bold text-secondary mb-5'>Add Expense</Text>

                    <View className='flex-1'>
                        <Text className='text-lg font-semibold mb-2'>Name</Text>
                        <TextInput
                            className='bg-white p-3 rounded-lg mb-4 border border-gray-300'
                            value={name}
                            onChangeText={setName}
                            placeholder='Bill Title'
                        />

                        <Text className='text-lg font-semibold mb-2'>Amount</Text>
                        <View className='bg-white px-2 rounded-lg mb-4 border border-gray-300 flex-row items-center gap-3'>
                            <MaterialIcons name="currency-rupee" size={18} color="grey" />
                            <TextInput
                                className='flex-1'
                                value={formatCurrency(amount)}
                                onChangeText={handleAmount}
                                placeholder='Enter amount'
                                keyboardType='numeric'
                            />
                        </View>

                        <Text className='text-lg font-semibold mb-2'>Description</Text>
                        <TextInput
                            className='bg-white p-3 rounded-lg mb-4 border border-gray-300 h-24'
                            value={description}
                            onChangeText={setDescription}
                            placeholder='Enter description'
                            multiline
                        />

                        <Text className='text-lg font-semibold mb-2'>Date</Text>
                        <Pressable
                            className='bg-white p-3 rounded-lg mb-4 border border-gray-300 flex-row items-center gap-3'
                            onPress={togglePicker}
                        >
                            <MaterialIcons name="date-range" size={24} color="grey" /><Text>{formatDate(date.toISOString())}</Text>
                        </Pressable>

                        {showPicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="spinner"
                                onChange={onDateChange}
                            />
                        )}
                    </View>

                    <Pressable
                        className='bg-secondary py-2  w-2/5 rounded-lg items-center mx-auto'
                        onPress={handleSubmit}
                    >
                        <Text className='text-white text-2xl font-bold'>Save</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );
}
export default AddBillModal