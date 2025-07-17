import RecordLayout from '@/components/Records/RecordLayout';
import { useLocalSearchParams } from 'expo-router';


const Record = () => {
    const { rid } = useLocalSearchParams();

    return (
        <RecordLayout rid={rid} />
    )
}
export default Record