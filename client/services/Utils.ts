import AsyncStorage from '@react-native-async-storage/async-storage';


export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };

    return new Date(dateString).toLocaleDateString('en-US', options);
};


export const getRandomHex = (length: number): string => {
    let res = '';
    const chars = '0123456789abcdef';

    for (let i = 0; i < length; i++)
        res += chars.charAt(Math.floor(Math.random() * chars.length));

    return res;
}

export const formatCurrency = (amount: number): string => {
    if (amount === 0)
        return '0.00';
    // Convert paise to rupees
    const rupees = amount / 100;

    let curr = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(rupees).slice(1);

    // Remove the decimal part if it is zero
    if (curr.endsWith('.00'))
        curr = curr.slice(0, -3);

    return curr;
};


export const getValues = async (key: string) => {
    try {

        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error(`Error getting value for key "${key}":`, error);
        return null;
    }
}


export const setValues = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting value for key "${key}":`, error);
    }
}
