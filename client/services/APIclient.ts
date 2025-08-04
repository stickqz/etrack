import { Record } from "@/types/dataTypes";
import axios from "axios";
import Constants from 'expo-constants';
import { Platform } from 'react-native';


export class APIClient {
    private static _instance: APIClient;
    private _client: ReturnType<typeof axios.create>;
    private _errorHandler: (error: any) => void;

    private constructor(baseURL: string, errorHandler: (error: any) => void) {
        this._client = axios.create({
            baseURL: baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });

        this._errorHandler = errorHandler;
    }

    // Singleton getter
    public static getInstance(
        baseURL: string,
        errorHandler: (error: any) => void
    ): APIClient {
        if (!APIClient._instance) {
            APIClient._instance = new APIClient(baseURL, errorHandler);
        }
        return APIClient._instance;
    }

    async _GET(path: string, params = {}) {
        const config = { params };
        return this._client.get(path, config)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _POST(path: string, data: any) {
        return this._client.post(path, data)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _DELETE(path: string) {
        return this._client.delete(path)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _PUT(path: string, data: any) {
        return this._client.put(path, data)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _PATCH(path: string, data: any) {
        return this._client.patch(path, data)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    // ---------------------- Routes ----------------------

    getuser(id: string): Promise<any> {
        return this._GET(`/users/${id}`);
    }

    createUser(userData: any): Promise<any> {
        return this._POST(`/users`, userData);
    }

    updateUser(id: string, userData: any): Promise<any> {
        return this._PUT(`/users/${id}`, userData);
    }

    // --------------------- Records ----------------------

    getAllRecords() {
        return this._GET(`/records`);
    }

    getRecord(id: string) {
        return this._GET(`/records/${id}`);
    }

    createRecord(opts: any): Promise<any> {
        return this._POST(`/records`, opts);
    }

    updateRecord(id: string, data: any) {
        return this._PUT(`/records/${id}`, data);
    }

    deleteRecord(id: string) {
        return this._DELETE(`/records/${id}`);
    }

    // --------------------- Bills ----------------------

    getAllBills() {
        return this._GET(`/bills`);
    }

    getBill(id: string) {
        return this._GET(`/bills/${id}`);
    }

    createBill(billData: any): Promise<any> {
        return this._POST(`/bills`, billData);
    }

    deleteBill(id: string) {
        return this._DELETE(`/bills/${id}`);
    }
}


let baseURL = '';

if (Platform.OS === 'android' && !Constants.isDevice)
    baseURL = 'http://10.0.2.2:3001/api';
else if (Platform.OS === 'android' || Platform.OS === 'ios')
    baseURL = 'http://192.168.0.105:3001/api'; // ← your machine's IP
else
    baseURL = 'http://localhost:3001/api';


const errorHandler = (error: any) => {
    if (error.response) {
        console.error("Error Response:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
    } else if (error.request) {
        console.error("No response received:", error.request);
    } else {
        console.error("Error setting up request:", error.message);
    }

    console.error("Axios config:", error.config);
};



const api = APIClient.getInstance(baseURL, errorHandler);

export default api;
