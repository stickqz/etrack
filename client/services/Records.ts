import { Record, Records } from "@/types/dataTypes";
import { records as dummyRecords } from "@/constants/dummyData";
import { getRandomHex, getValues, setValues } from "@/services/Utils";

let records: Records = {};

// Fetch bills for this user
export const initRecords = async (rids: string[]): Promise<Records> => {
    // get bills from API

    const allRecords = await getValues("records");

    if (allRecords) {
        for (const rid of rids)
            records[rid] = allRecords[rid];
    } else {
        for (const rid of rids)
            records[rid] = dummyRecords[rid];

        await setValues("records", records);
    }

    return records;
}


export const getRecords = async (rids: string[]): Promise<Records> => {
    const userRecords: Records = {};
    const allRecords = await getValues("records");

    if (allRecords) {
        for (const rid of rids)
            userRecords[rid] = allRecords[rid];
    }

    return userRecords;
}


export const getRecord = (rid: string): Record => {
    return records[rid];
}


export const uploadRecord = (record: any): Record => {
    const newRecord: Record = {
        id: getRandomHex(6),
        title: record.name,
        bids: [],
        createdAt: new Date().toISOString(),
        netExpense: 0,
        uid: record.uid,
        lastEdited: new Date().toISOString(),
        description: record.description,
    };

    return newRecord;
}