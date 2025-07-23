import { getValues, setValues } from '@/services/Utils';
import { initUser } from '@/services/User';
import { deleteUserBill, getBill, initBills, uploadBill } from '@/services/Bills';
import { deleteUserRecord, getRecord, initRecords, uploadRecord } from '@/services/Records';


import { loadBill, addBill, removeBill } from './billsSlice';
import { loadUser, updateUser } from './userSlice';
import { loadRecord, addRecord, updateRecord, removeRecord } from './recordsSlice';
import { Bill } from '../types/dataTypes';


// --------------------------------------- Users --------------------------------------- //

export const fetchUser = () => async (dispatch: any) => {
    const user = await initUser();
    dispatch(loadUser(user))

    const { rids } = user;

    if (rids?.length)
        dispatch(fetchRecords(rids));
}


export const addRecordToUser = (record: any) => async (dispatch: any, getState: any) => {
    let u = await getValues("user");

    if (!u.rids.includes(record.id)) {
        u.rids.push(record.id);
        await setValues("user", u);
    }

    const { rids } = getState().user;
    if (!rids.includes(record.id))
        dispatch(updateUser({id: record.id, type: "addRecord"}));
}


// --------------------------------------- Records --------------------------------------- //

export const fetchRecords = (rids: string[]) => async (dispatch: any) => {
    const records = await initRecords(rids);
    dispatch(loadRecord(records));

    const bids = Object.values(records).flatMap(record => record.bids);

    if (bids.length)
        dispatch(fetchBills(bids));
}


export const addBillToRecord = (bill: Bill) => async (dispatch: any) => {
    try {
        let recs = await getValues("records");

        recs[bill.rid].bids.push(bill.id);
        recs[bill.rid].netExpense += bill.amount;
        recs[bill.rid].lastEdited = bill.editedAt;

        await setValues("records", recs);

        dispatch(updateRecord({payload: bill, type: "addBill"}));
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

    dispatch(addRecord(r));
    dispatch(addRecordToUser(r));
}


export const deleteRecord = (rid: string) => async (dispatch: any) => {
    const record = getRecord(rid);
    const bids = record.bids;

    for (const id of bids)
        deleteBill(id);

    deleteUserRecord(rid);
    const recs = await getValues("records");

    if (recs[rid]) {
        delete recs[rid];
        await setValues("records", recs);
    }

    const user = await getValues("user");
    if (user.rids.includes(rid)) {
        user.rids = user.rids.filter((r: string) => r !== rid);
        await setValues("user", user);
    }

    dispatch(removeRecord(rid));
    dispatch(updateUser({id: rid, type: "removeRecord"}));
}

// --------------------------------------- Bills --------------------------------------- //

export const fetchBills = (bids: string[]) => async (dispatch: any) => {
    const bills = await initBills(bids);
    dispatch(loadBill(bills));
}


export const createBill = (bill : any) => async (dispatch: any) => {
    const newBill = uploadBill(bill);

    const allBills = await getValues("bills");

    allBills[newBill.id] = newBill;

    await setValues("bills", allBills);

    dispatch(addBill(newBill));
    dispatch(addBillToRecord(newBill));
}


export const deleteBill = (bid: string) => async (dispatch: any) => {
    const bill = getBill(bid);
    const rid = bill.rid;

    deleteUserBill(bid);
    const allBills = await getValues("bills");

    if (allBills[bid]) {
        delete allBills[bid];
        await setValues("bills", allBills);
    }

    const records = await getValues("records");
    if (records[rid]) {
        records[rid].bids = records[rid].bids.filter((b: string) => b !== bid);
        records[rid].netExpense -= bill.amount;
        records[rid].lastEdited = new Date().toISOString();

        await setValues("records", records);
    }

    dispatch(removeBill({ id: bid }));
    dispatch(updateRecord({payload: bill, type: "removeBill"}));


}
