import { Record, Records } from "@/types/dummyDataTypes";
import { records as dummyRecords } from "@/constants/dummyData";

let records: Records;

// Fetch bills for this user
export const initRecords = (rids: string[]): Records => {
    // get bills from API

    if (!records)
        records = getRecords(rids);

    return records;
}


export const getRecords = (rids: string[]): Records => {
    const userRecords: Records = {};

    if (!rids || rids.length === 0) {
        return dummyRecords;
    }

    for (const rid of rids)
        userRecords[rid] = dummyRecords[rid];

    return userRecords;
}


export const getRecord = (rid: string): Record => {
    return records[rid];
}
