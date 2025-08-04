import { Record, Records } from "@/types/dataTypes";
import { getValues} from "@/services/Utils";
import api from "./APIclient";

let records: Records = {};

// Fetch bills for this user
export const initRecords = async (recordIds: any): Promise<Records> => {
    // // get bills from API

    // const allRecords = await getValues("records");

    // if (allRecords) {
    //     for (const recordId of recordIds)
    //         records[recordId] = allRecords[recordId];
    // } else {
    //     for (const recordId of recordIds)
    //         records[recordId] = dummyRecords[recordId];

    //     await setValues("records", records);
    // }
    records = structuredClone(recordIds);
    return records;
}


export const getRecords = async (recordIds: string[]): Promise<Records> => {
    const userRecords: Records = {};
    const allRecords = await getValues("records");

    if (allRecords) {
        for (const recordId of recordIds)
            userRecords[recordId] = allRecords[recordId];
    }

    return userRecords;
}


export const getRecord = (recordId: string): Record => {
    return { ...records[recordId] };
}
/*
    const newRecord: Record = {
        id: getRandomHex(6),
        title: record.name,
        bids: [],
        createdAt: new Date().toISOString(),
        netAmount: 0,
        uid: record.uid,
        lastEdited: new Date().toISOString(),
        description: record.description,
    };

*/
export const uploadRecord = async (record: any): Promise<Record> => {
    const robj = {
        title: record.name,
        userId: record.uid,
        netAmount: 0,
        lastEdited: new Date().toISOString(),
        description: record.description,
    }
    const newRecord = await api.createRecord(robj);

    if (!newRecord)
        throw new Error("Failed to create record");

    records[newRecord.id] = newRecord;

    return newRecord;
}


export const deleteUserRecord = (recordId: string) => {
    if (records[recordId]) {
        delete records[recordId];
    }
}


// export const updateRecordData = (data: any) => {
//     const { recordId, bid } = data;
//     console.log('recordId', recordId, 'bid', bid);
//     console.log('\n RECORDS', records);
//     console.log(Object.keys(records), 'records keys');
//     console.log(records[recordId], 'record data');
    
//     // Check if record exists
//     if (!records[recordId]) {
//         console.error(`Record with id ${recordId} does not exist in records.`);
//         return records;
//     }

//     const bids = [...records[recordId].bids, bid];
//     records[recordId].bids = bids;
    
//     return records;
// }
