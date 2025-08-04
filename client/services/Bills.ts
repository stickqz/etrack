import { Bills, Bill } from "@/types/dataTypes";
import { getRandomHex, getValues } from "@/services/Utils";
import api from "./APIclient";


let bills: Bills = {};

// Fetch bills for this user
export const initBills = async (bids: any) => {
    bills = bids;


    // const allBills = await getValues("bills");

    // if (allBills) {
    //     for (const bid of bids)
    //         bills[bid] = allBills[bid];
    // } else {
    //     for (const bid of bids)
    //         bills[bid] = dummyBills[bid];

    //     await setValues("bills", bills);
    // }

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

/*
model Bill {
  id          String   @id @default(uuid())
  name        String
  amount      Int
  record      Record   @relation(fields: [recordId], references: [id])
  recordId    String
  createdAt   DateTime @default(now())
  description String?
}

*/

export const uploadBill = async (bill: any): Promise<Bill> => {

    const billobj = {
        id: getRandomHex(6),
        name: bill.name,
        amount: bill.amount,
        createdAt: new Date().toISOString(),
        recordId: bill.rid,
        description: bill.description,
    };

    const newBill = await api.createBill(billobj);

    bills[newBill.id] = newBill;

    return newBill;
}


export const deleteUserBill = (bid: string): void => {
    if (bills[bid]) {
        delete bills[bid];
    }
}