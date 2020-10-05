import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Search from './components/Search';
import Headings from './components/Headings';
import EmployeeCard from './components/EmployeeCard';
import getUsers from "./utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const emps = getUsers;

  const [ empData, setEmpData ] = useState({
    employees: emps
  })
  const { employees } = empData

  const handleChange = (e) => {
    e.preventDefault();
    const search = e.target.value.toLowerCase();
    let newEmployees = [];
    if ( search !== "") {
      newEmployees = emps.filter(employee => {
        return (
          search === employee.name.first.toLowerCase().slice(0, search.length) || 
          search === employee.name.last.toLowerCase().slice(0, search.length))})
    } else {
      newEmployees = emps;
    }
    setEmpData({ employees: newEmployees })
  }

  const handleOnClick = () => {

    setEmpData({ employees: employees.sort(sortByName)})
  }

  function sortByName( a, b ) {
    const nameA = a.name.first.toLowerCase();
    const nameB = b.name.first.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison
  }

  return (
    <Wrapper>
      <Title />
      <Search handleChange={handleChange}/>
      <Headings />
      <EmployeeCard employees={employees} onClick={handleOnClick} />
    </Wrapper>
  );
}

export default App;


