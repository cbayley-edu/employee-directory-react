import React, { useState, useEffect } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Search from './components/Search';
import EmployeeList from './components/EmployeeList';
import API from "./utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [employees, updateEmployees] = useState([]);
  const [employeesDataSet, updateEmployeesDataSet] = useState([]);

  useEffect(() => {
    API.getUsers()
    .then(({ data: { results } }) => updateEmployees(results))
  }, []);

  return (
    <Wrapper>
      <Title />
      <Search employees={employees} updateEmps={updateEmployeesDataSet}/>
      <EmployeeList employees={employeesDataSet} />
    </Wrapper>
  );
}

export default App;


