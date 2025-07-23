import React from 'react';
import { View, Pressable, Text, TouchableOpacity } from 'react-native';


type MenuOption = {
    label: string;
    onPress: () => void;
};

type Props = {
    options: MenuOption[];
    toggleMenu?: () => void;
};

export const ThreeDotMenu: React.FC<Props> = ({ options, toggleMenu }) => {

    return (
        <Pressable className={`absolute mt-10 top-0 h-full w-full`}
            onPress={toggleMenu}>
            <View className="mt-16 rounded-md shadow p-2 z-50 w-40 mr-5 ml-auto bg-white"
                onStartShouldSetResponder={() => true}>
                {options.map((opt, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={opt.onPress}
                        className="py-3 px-3 hover:bg-gray-100"
                    >
                        <Text className="text-primary">{opt.label}</Text>
                    </TouchableOpacity>
                )
                )}
            </View>
        </Pressable>
    );
};
