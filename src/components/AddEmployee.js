import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function AddEmployee() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [emailId, setemailId] = useState("");

    const {id} = useParams();

    const addOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employeeDetails = {firstName, lastName, emailId};
        console.log(employeeDetails);
        // console.log("window.location.origin" , window.location.origin)
        if (id) {
            EmployeeService.updateEmployee(id, employeeDetails).then((resp) => {
                console.log("response update employee= ", resp);
            }).catch(err => {
                console.log("err update= ", err);
            }) ;
        } else {
            EmployeeService.createEmployee(employeeDetails).then((resp) => {
                console.log("response create employee= ", resp);
            }).catch(err => {
                console.log("err create= ", err);
            }) ;
        }
        
        window.location.href = window.location.origin + "/employees";
        
        // window.history.pushState({}, "", "/employees");
    }

    useEffect(() => {
      EmployeeService.getEmployeeById(id).then(resp => {
        console.log("response getEmpById = " , resp);
        let employeeData = resp.data;
        setfirstName(employeeData.firstName);
        setlastName(employeeData.lastName);
        setemailId(employeeData.emailId);
      }).catch(err => {
        console.log("err getEmpById = ", err);
      })
    });
    

    const title = () => {
        if (id) {
            return (<h2 className='text-center mt-2'>Update Employee</h2>);
        } else {
            return (<h2 className='text-center mt-2'>Add Employee</h2>);
        }
    }
  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {/* <h2 className='text-center mt-2'>Add Employee</h2> */}
                    {title()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'> First Name: </label>
                                <input 
                                    type='text' 
                                    placeholder='Enter first name' 
                                    name='firstName' 
                                    className='form-control'
                                    value={firstName}
                                    onChange={(e) => {setfirstName(e.target.value)}}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name: </label>
                                <input 
                                    type='text' 
                                    placeholder='Enter last name' 
                                    name='lastName' 
                                    className='form-control'
                                    value={lastName}
                                    onChange={(e) => {setlastName(e.target.value)}}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id: </label>
                                <input 
                                    type='text' 
                                    placeholder='Enter email id' 
                                    name='emailId' 
                                    className='form-control'
                                    value={emailId}
                                    onChange={(e) => {setemailId(e.target.value)}}
                                ></input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => addOrUpdateEmployee(e)}>Save</button>
                            <Link to='/employees' className='btn btn-secondary' >Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee