import axios, { AxiosResponse } from 'axios';
import { IEmployeeType } from '../interfaces/IEmployee';

const instance = axios.create({
    baseURL: 'https://api.1337co.de/v3',
    headers: {
        'Authorization': 'api-key 14:2023-08-02:therese.boutayeb@tretton37.com dc59f3cc31d5710b9a6cfdc9faec75463ecf4a73218599239ab9cb7da289fa44'
    }
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody)
};

export const employeeService = {
	getEmployees: (): Promise<IEmployeeType[]> => requests.get('/employees'),
}