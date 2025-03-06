import { API_URL } from "../utils/constants";

export default class ApiService {

    async request(url, options) {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

    async getApi() {
        return await this.request(API_URL + '/api');
    }
}
