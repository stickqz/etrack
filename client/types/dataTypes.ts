export interface User {
    id: string;
    name: string;
    email: string;
    rids: string[];
}

export interface Record {
    bids: string[];
    id: string;
    userId: string;
    title: string;
    createdAt: string;
    netAmount: number;
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
    recordId: string;
    createdAt: string;
    description: string;
    // addedby: string;
    // editedby: string;
    // editedAt: string;
    // billfile: string;
    // voicenote: string;
    // sharedby: string[];
    // paidBy: string;
}

export interface Records {
    [key: string]: Record;
}

export interface Bills {
    [key: string]: Bill;
}
