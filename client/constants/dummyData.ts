import { Bill } from "@/types/dataTypes";

export const user = {
    uid: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    rids: ["abc", "bcd"]
};

export const records: any = {
    "abc": {
        bids: ["bill1", "bill2"],
        id: "abc",
        title: "Daily Expenses",
        createdAt: "2025-07-14T10:00:00Z",
        netExpense: 200000,
        uid: "1",
        lastEdited: "2025-07-14T12:00:00Z",
        description: "Daily expenses for the team",
    },
    "bcd": {
        bids: ["bill3"],
        id: "bcd",
        title: "Monthly Expenses",
        createdAt: "2025-07-01T09:00:00Z",
        netExpense: 100000,
        uid: "1",
        lastEdited: "2025-07-01T11:00:00Z",
        description: "Monthly expenses for the office",
    }
};

export const bills: { [key: string]: Bill } = {
    "bill1": {
        id: "bill1",
        name: "Reliance Shopping",
        amount: 50000,
        date: "2025-07-14T10:00:00Z",
        addedby: "John Doe",
        editedby: "John Doe", // Default value
        editedAt: "2025-07-14T11:00:00Z",
        description: "Shopping for office supplies",
        billfile: "",
        voicenote: "",
        sharedby: ["John Doe"], // Default value
        paidBy: "John Doe",
        rid: "abc",
    },
    "bill2": {
        id: "bill2",
        name: "Electricity Bill",
        amount: 150000,
        date: "2025-07-14T10:00:00Z",
        addedby: "John Doe",
        editedby: "John Doe", // Default value
        editedAt: "2025-07-14T11:30:00Z",
        description: "Monthly electricity bill for the office",
        billfile: "",
        voicenote: "",
        sharedby: ["John Doe"], // Default value
        paidBy: "John Doe",
        rid: "abc",
    },
    "bill3": {
        id: "bill3",
        name: "Internet Bill",
        amount: 100000,
        date: "2025-07-01T09:00:00Z",
        addedby: "John Doe",
        editedby: "John Doe", // Default value
        editedAt: "2025-07-01T10:00:00Z",
        description: "Monthly internet bill for the office",
        billfile: "",
        voicenote: "",
        sharedby: ["John Doe"], // Default value
        paidBy: "John Doe",
        rid: "bcd",
    }
};

