import axios from "axios";

const EMPLOYEE_API_BASE_URl = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URl, employee);
    }
}

export default new EmployeeService();