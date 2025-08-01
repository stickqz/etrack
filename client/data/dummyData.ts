
export const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    rids : ["abc", "bcd", "def"]
};

export const records: any = {
    "abc": {
        bids: ["bill1", "bill2", "bill3"],
        title: "Daily Expenses",
        createdAt: "2025-07-14T10:00:00Z",
        netExpense: 2000,
        owner: "John Doe",
        editor: "Jane Smith",
        payers: ["Jane Smith", "John Doe"],
        viewer: ["Alice Johnson", "Bob Brown"],
        lastEdited: "2025-07-14T12:00:00Z",
        description: "Daily expenses for the team",
    },
    "bcd": {
        bids: ["bill4", "bill5"],
        title: "Monthly Expenses",
        createdAt: "2025-07-01T09:00:00Z",
        netExpense: 5000,
        owner: "Jane Smith",
        editor: "John Doe",
        payers: ["John Doe", "Jane Smith"],
        viewer: ["Alice Johnson"],
        lastEdited: "2025-07-01T11:00:00Z",
        description: "Monthly expenses for the office",
    },
    "def": {
        bids: ["bill6", "bill7", "bill8"],
        title: "Project Expenses",
        createdAt: "2025-06-20T08:00:00Z",
        netExpense: 8000,
        owner: "Alice Johnson",
        editor: "Bob Brown",
        payers: ["Alice Johnson", "Bob Brown"],
        viewer: ["John Doe", "Jane Smith"],
        lastEdited: "2025-06-20T10:00:00Z",
        description: "Expenses related to the new project",
    }
};

export const bills: { [key: string]: any } = {
    "bill1": {
        id: "bill1",
        name: "Reliance Shopping",
        amount: 500,
        date: "2025-07-14T10:00:00Z",
        addedby: "John Doe",
        editedby: "Jane Smith",
        editedAt: "2025-07-14T11:00:00Z",
        description: "Shopping for office supplies",
        billfile: "",
        voicenote: "",
        sharedby: ["John Doe", "Jane Smith"],
        paidBy: "John Doe",
    },
    "bill2": {
        id: "bill2",
        name: "Electricity Bill",
        amount: 1500,
        date: "2025-07-14T10:00:00Z",
        addedby: "Jane Smith",
        editedby: "John Doe",
        editedAt: "2025-07-14T11:30:00Z",
        description: "Monthly electricity bill for the office",
        billfile: "",
        voicenote: "",
        sharedby: ["Jane Smith", "John Doe"],
        paidBy: "Jane Smith",
    },
    "bill3": {
        id: "bill3",
        name: "Internet Bill",
        amount: 1000,
        date: "2025-07-14T10:00:00Z",
        addedby: "Alice Johnson",
        editedby: "Bob Brown",
        editedAt: "2025-07-14T12:00:00Z",
        description: "Monthly internet bill for the office",
        billfile: "",
        voicenote: "",
        sharedby: ["Alice Johnson", "Bob Brown"],
        paidBy: "Alice Johnson"
    },
    "bill4": {
        id: "bill4",
        name: "Office Rent",
        amount: 3000,
        date: "2025-07-01T09:00:00Z",
        addedby: "Jane Smith",
        editedby: "John Doe",
        editedAt: "2025-07-01T10:00:00Z",
        description: "Monthly office rent",
        billfile: "",
        voicenote: "",
        sharedby: ["Jane Smith", "John Doe"],
        paidBy: "Jane Smith",
    },
    "bill5": {
        id: "bill5",
        name: "Stationery Purchase",
        amount: 2000,
        date: "2025-07-01T09:30:00Z",
        addedby: "John Doe",
        editedby: "Jane Smith",
        editedAt: "2025-07-01T10:30:00Z",
        description: "Purchase of office stationery",
        billfile: "",
        voicenote: "",
        sharedby: ["John Doe", "Jane Smith"],
        paidBy: "John Doe",
    },
    "bill6": {
        id: "bill6",
        name: "Travel Expenses",
        amount: 4000,
        date: "2025-06-20T08:30:00Z",
        addedby: "Alice Johnson",
        editedby: "Bob Brown",
        editedAt: "2025-06-20T09:30:00Z",
        description: "Travel expenses for the project",
        billfile: "",
        voicenote: "",
        sharedby: ["Alice Johnson", "Bob Brown"],
        paidBy: "Alice Johnson",
    },
    "bill7": {
        id: "bill7",
        name: "Equipment Purchase",
        amount: 3000,
        date: "2025-06-20T08:45:00Z",
        addedby: "Bob Brown",
        editedby: "Alice Johnson",
        editedAt: "2025-06-20T09:45:00Z",
        description: "Purchase of project equipment",
        billfile: "",
        voicenote: "",
        sharedby: ["Bob Brown", "Alice Johnson"],
        paidBy: "Bob Brown",
    },
    "bill8": {
        id: "bill8",
        name: "Consultant Fees",
        amount: 1000,
        date: "2025-06-20T09:00:00Z",
        addedby: "Alice Johnson",
        editedby: "Bob Brown",
        editedAt: "2025-06-20T10:00:00Z",
        description: "Fees for external consultants",
        billfile: "",
        voicenote: "",
        sharedby: ["Alice Johnson", "Bob Brown"],
        paidBy: "Alice Johnson",
    }
};

