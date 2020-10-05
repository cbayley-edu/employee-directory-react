import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Search from './components/Search';
import Headings from './components/Headings';
import EmployeeCard from './components/EmployeeCard';
// import getUsers from "./utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Wrapper>
      <Title />
      <Search />
      <Headings />
      <EmployeeCard />
    </Wrapper>
  );
}

export default App;


