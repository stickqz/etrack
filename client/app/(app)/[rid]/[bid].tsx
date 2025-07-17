import { useLocalSearchParams } from 'expo-router';
import BillLayout from '@/components/Bills/BillLayout';

const Bill = () => {
    const { rid, bid } = useLocalSearchParams();

    return <BillLayout rid={rid} bid={bid} />
}


export default Bill;