import { Bills, Bill } from "@/types/dataTypes";
import { bills as dummyBills } from "@/constants/dummyData";
import { getRandomHex, getValues, setValues } from "@/services/Utils";


let bills: Bills = {};

// Fetch bills for this user
export const initBills = async (bids: string[]) => {

    const allBills = await getValues("bills");

    if (allBills) {
        for (const bid of bids)
            bills[bid] = allBills[bid];
    } else {
        for (const bid of bids)
            bills[bid] = dummyBills[bid];

        await setValues("bills", bills);
    }

    return bills;
}


export const getBills = async (bids: string[]): Promise<Bills> => {
    const userBills: Bills = {};
    const allBills = await getValues("bills");

    if (allBills) {
        for (const bid of bids)
            userBills[bid] = allBills[bid];
    }

    return userBills;
}


export const getBill = (bid: string): Bill => {
    return {...bills[bid]};
}


export const uploadBill = (bill: any): Bill => {

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
        rid: bill.rid
    };

    bills[newBill.id] = newBill;

    return newBill;
}


export const deleteUserBill = (bid: string): void => {
    if (bills[bid]) {
        delete bills[bid];
    }
}