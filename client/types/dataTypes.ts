export interface User {
    uid: string;
    name: string;
    email: string;
    rids: string[];
}

export interface Record {
    bids: string[];
    id: string;
    uid: string;
    title: string;
    createdAt: string;
    netExpense: number;
    // owner: string;
    // editor: string;
    // payers: string[];
    // viewer: string[];
    lastEdited: string;
    description: string;
}

export interface Bill {
    id: string;
    name: string;
    amount: number;
    date: string;
    addedby: string;
    editedby: string;
    editedAt: string;
    description: string;
    billfile: string;
    voicenote: string;
    sharedby: string[];
    paidBy: string;
    rid: string;
}

export interface Records {
    [key: string]: Record;
}

export interface Bills {
    [key: string]: Bill;
}
