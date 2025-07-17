import { Bills, Bill } from "@/types/dummyDataTypes";
import { bills as dummyBills } from "@/constants/dummyData";
import { getRandomHex } from "./Utils";

let bills: Bills;

// Fetch bills for this user
export const initBills = (bids: string[]) => {
    // get bills from API

    bills = getBills(bids);

    return bills;
}


export const getBills = (bids: string[]): Bills => {
    const userBills: Bills = {};

    for (const bid of bids)
        userBills[bid] = dummyBills[bid];

    return userBills;
}


export const getBill = (bid: string): Bill => {
    return bills[bid];
}

export const uploadBill = async (bill: any): Promise<Bill> => {
    // This function would typically handle uploading a bill to a server
    // For now, we will just return a dummy bill object


    const newBill: Bill = {
        id: getRandomHex(6),
        name: bill.name,
        amount: bill.amount,
        date: new Date().toISOString(),
        addedby: "John Doe",
        editedby: "John Doe",
        editedAt: new Date().toISOString(),
        description: bill.description,
        billfile: "",
        voicenote: "",
        sharedby: ["John Doe"],
        paidBy: "John Doe",
    };

    // Add the new bill to the bills object
    bills[newBill.id] = newBill;

    return newBill;
}