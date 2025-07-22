import { getValues, setValues } from '@/services/Utils';
import { initUser } from '@/services/User';
import { initBills, uploadBill } from '@/services/Bills';
import { initRecords, uploadRecord } from '@/services/Records';


import { loadBill, addBill } from './billsSlice';
import { loadUser, _addRecordToUser } from './userSlice';
import { loadRecord, _addBillToRecord, addRecord } from './recordsSlice';
import { Bill } from '../types/dataTypes';


export const fetchUser = () => async (dispatch: any) => {
    const user = await initUser();
    dispatch(loadUser(user))

    const { rids } = user;

    if (rids?.length)
        dispatch(fetchRecords(rids));
}


export const addRecordToUser = (record: any) => async (dispatch: any, getState: any) => {
    let u = await getValues("user");

    // Prevent duplicate record IDs in persistent storage
    if (!u.rids.includes(record.id)) {
        u.rids.push(record.id);
        await setValues("user", u);
    }

    // Prevent duplicate record IDs in Redux state
    const { rids } = getState().user;
    if (!rids.includes(record.id)) {
        dispatch(_addRecordToUser(record));
    }
}



export const fetchRecords = (rids: string[]) => async (dispatch: any) => {
    const records = await initRecords(rids);
    dispatch(loadRecord(records));

    const bids = Object.values(records).flatMap(record => record.bids);

    if (bids.length){
        dispatch(fetchBills(bids));
    }
};


export const addBillToRecord = (bill: Bill) => async (dispatch: any) => {
    try {
        let recs = await getValues("records");

        recs[bill.rid].bids.push(bill.id);
        recs[bill.rid].netExpense += bill.amount;
        recs[bill.rid].lastEdited = bill.editedAt;

        await setValues("records", recs);

        dispatch(_addBillToRecord(bill)); // Update record in state
    } catch (error) {
        console.error('Error in addBillToRecord:', error);
    }
}


export const createRecord = (record: any) => async (dispatch: any) => {
    const r = uploadRecord(record);

    const _recs = await getValues("records");

    if (!(r.id in _recs))
        _recs[r.id] = r;

    await setValues("records", _recs);

    dispatch(addRecord(r)); // Add to records
    dispatch(addRecordToUser(r));
};


export const fetchBills = (bids: string[]) => async (dispatch: any) => {
    const bills = await initBills(bids);
    dispatch(loadBill(bills)); // Load bills into state
}


export const createBill = (bill : any) => async (dispatch: any) => {
    const newBill = uploadBill(bill);

    const allBills = await getValues("bills");

    allBills[newBill.id] = newBill;

    await setValues("bills", allBills);

    dispatch(addBill(newBill)); // Add to bills
    dispatch(addBillToRecord(newBill)); // Link to record
};
