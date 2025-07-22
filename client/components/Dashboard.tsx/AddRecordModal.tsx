import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';


import { useDispatch } from 'react-redux';
import { createRecord } from '@/store/thunks';
import { AppDispatch } from '@/store/store';


interface Props {
    modalButton: () => void;
    uid: string;
}

const AddRecordModal = ({ modalButton, uid }: Props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch<AppDispatch>();


    const handleSubmit = async () => {
        const record = {
            name,
            description,
            uid
        }

        dispatch(createRecord(record));

        modalButton();
    };


    return (
        <Pressable
            className='absolute bottom-0 left-0 right-0 h-full justify-center items-center z-10'
            onPress={modalButton}
        >
            <View className='absolute bottom-0 right-0 h-5/6 w-full bg-white p-5 rounded-3xl' onStartShouldSetResponder={() => true}>
                <View className='container flex-col h-full'>
                    <Text className='text-center text-2xl font-bold text-secondary mb-5'>Add Record</Text>

                    <View className='flex-1'>
                        <Text className='text-lg font-semibold mb-2'>Name</Text>
                        <TextInput
                            className='bg-white p-3 rounded-lg mb-4 border border-gray-300'
                            value={name}
                            onChangeText={setName}
                            placeholder='Record Title'
                        />

                        <Text className='text-lg font-semibold mb-2'>Description</Text>
                        <TextInput
                            className='bg-white p-3 rounded-lg mb-4 border border-gray-300 h-24'
                            value={description}
                            onChangeText={setDescription}
                            placeholder='Enter description'
                            multiline
                        />

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
export default AddRecordModal;