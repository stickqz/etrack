import React from 'react';
import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';

type Props = {
    visible: boolean;
    title?: string;
    message?: string;
    onAccept: () => void;
    onReject: () => void;
    onClose?: () => void;
    acceptText?: string;
    rejectText?: string;
};

const CustomModal: React.FC<Props> = ({
    visible,
    title = 'Confirm Action',
    message = 'Are you sure you want to proceed?',
    onAccept,
    onReject,
    onClose,
    acceptText = 'Accept',
    rejectText = 'Reject',
}) => {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable className="flex-1 bg-black/40 justify-center items-center" onPress={onClose}>
                <View className="bg-white p-6 rounded-xl w-[80%] shadow-lg" onStartShouldSetResponder={() => true}>
                    <Text className="text-lg font-semibold mb-2 text-gray-800">{title}</Text>
                    <Text className="text-base text-gray-600 mb-4">{message}</Text>

                    <View className="flex-row justify-end space-x-3 gap-2">
                        <TouchableOpacity onPress={onReject} className="px-4 py-2 rounded-md border border-black"
                        >
                            <Text className="text-gray-800 font-semibold">{rejectText}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={onAccept} className="bg-secondary px-4 py-2 rounded-md">
                            <Text className="text-white font-semibold">{acceptText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
};

export default CustomModal;
