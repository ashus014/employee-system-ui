import axios from "axios";

const EMPLOYEE_API_BASE_URl = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URl, employee);
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URl);
  }

  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URl + "/" + id);
  }
}

export default new EmployeeService();
