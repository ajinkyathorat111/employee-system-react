import axios from 'axios';

const EMPLOYEE_BASE_URL = 'http://127.0.0.1:8080/api/v1/employees';


class EmployeeService {

    async getAllEmployees() {
        return axios.get(EMPLOYEE_BASE_URL);
    }

    async createEmployee(employeeDetails) {
        return axios.post(EMPLOYEE_BASE_URL, employeeDetails);
    }

    async getEmployeeById(id) {
        return axios.get(EMPLOYEE_BASE_URL + "/" + id);
    }

    async updateEmployee(id, employeeData) {
        return axios.put(EMPLOYEE_BASE_URL + "/" + id, employeeData);
    }

    async deleteEmployee(id) {
        return axios.delete(EMPLOYEE_BASE_URL + "/" + id);
    }
}

export default new EmployeeService();
