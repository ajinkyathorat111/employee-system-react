import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function ListEmployees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      getAllEmployees();
    }, [])

    const getAllEmployees = () => {
      EmployeeService.getAllEmployees().then(employeeData => {
        console.log(employeeData);
        setEmployees(employeeData.data);
      }).catch(err => {
        console.log("getAllEmployees err = ", err);
      })
    }

    const deleteEmployee = (id) => {
      EmployeeService.deleteEmployee(id).then(resp => {
        console.log("delete resp = ", resp);
        getAllEmployees();
      }).catch(err => {
        console.log("del err= ", err);
      })
    }
    
  return (
    <div className='container'>
        <Link to="/add-employee" className='btn btn-primary mb-2 mt-2'>Add Employee</Link>
        <h2>List of Employees</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                              <Link to={`/update-employee/${employee.id}`} className='btn btn-secondary'>Update</Link>
                              <button className='btn btn-danger'
                              style={{marginLeft: "10px"}}
                              onClick={() => deleteEmployee(employee.id)}
                              >Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
