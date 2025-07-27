import axios from "axios";

export default class APIClient {
    private _client: ReturnType<typeof axios.create>;
    private _errorHandler: (error: any) => void;

    constructor(baseURL: string, errorHandler: (error: any) => void) {
        this._client = axios.create({
            baseURL: baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });

        this._errorHandler = errorHandler;
    }

    async _GET(path:string, params={}) {
        let config = {params}

        return this._client.get(path, config)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _POST(path:string, data:any) {
        return this._client.post(path, data)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _DELETE(path:string) {
        return this._client.delete(path)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _PUT(path:string, data:any) {
        return this._client.put(path, data)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    async _PATCH(path:string, data:any) {
        return this._client.patch(path, data)
            .then(response => response.data)
            .catch(this._errorHandler);
    }

    // ---------------------- Routes ----------------------

    getuser(id: string) {
        return this._GET(`/users/${id}`);
    }
}