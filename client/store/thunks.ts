import { initUser} from '@/services/User';
import { deleteUserBill, getBill, initBills, uploadBill } from '@/services/Bills';
import { deleteUserRecord, getRecord, initRecords, uploadRecord } from '@/services/Records';


import { loadBill, addBill, removeBill } from './billsSlice';
import { loadUser, updateUser } from './userSlice';
import { loadRecord, addRecord, updateRecord, removeRecord } from './recordsSlice';
import { Bill } from '../types/dataTypes';


// --------------------------------------- Users --------------------------------------- //


export const fetchUser = () => async (dispatch: any) => {
    const {user, records, bills} = await initUser();

    initRecords(records);
    initBills(bills);

    dispatch(loadUser(user));
    dispatch(loadRecord(records));
    dispatch(loadBill(bills));
}


// --------------------------------------- Records --------------------------------------- //

export const addBillToRecord = (bill: Bill) => async (dispatch: any) => {
    try {
        dispatch(updateRecord({payload: bill, type: "addBill"}));
    } catch (error) {
        console.error('Error in addBillToRecord:', error);
    }
}


export const createRecord = (record: any) => async (dispatch: any) => {
    try {
        const r = await uploadRecord(record);

        dispatch(addRecord(r));
        dispatch(updateUser({id: r.id, type: "addRecord"}));
    } catch (error) {
        console.error('Error creating record:', error);
    }
}


export const deleteRecord = (rid: string) => async (dispatch: any) => {
    const record = getRecord(rid);
    const bids = record.bids;

    for (const id of bids)
        deleteBill(id);

    deleteUserRecord(rid);

    dispatch(removeRecord(rid));
    dispatch(updateUser({id: rid, type: "removeRecord"}));
}

// --------------------------------------- Bills --------------------------------------- //


export const createBill = (bill : any) => async (dispatch: any) => {
    try {
        const newBill = await uploadBill(bill);
        dispatch(addBill(newBill));
        dispatch(updateRecord({bill: newBill, type: "addBill"}));
    } catch (error: any) {
        console.error('Error creating bill:', error);
        console.error('stack trace:', error.stack);
    }
}


export const deleteBill = (bid: string) => async (dispatch: any) => {
    const bill = getBill(bid);

    deleteUserBill(bid);

    dispatch(removeBill({ id: bid }));
    dispatch(updateRecord({payload: bill, type: "removeBill"}));


}
