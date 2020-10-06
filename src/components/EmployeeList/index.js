import React, { useState, useEffect }  from "react";
import Gender from '../Gender';
import './style.css';

export default function EmployeeList({ employees }) {
  const [sortedEmployees, updateSortedEmployees] = useState([]);
  const [sortOrderState, setSortOrderState] = useState("descending");

  useEffect(() => 
    updateSortedEmployees(employees)
    , [employees]);

  const sortEmployees = (criteria) => {
    const employeesCopy = [...employees];
    const updateSort = employeesCopy.sort((a, b) => {

      if (criteria === "name.first") {
        return sortOrderState === "descending" 
        ? a.name.first.localeCompare(b.name.first)
        : b.name.first.localeCompare(a.name.first);
      } else 

      if (criteria === "name.last") {
        return sortOrderState === "descending" 
        ? a.name.last.localeCompare(b.name.last)
        : b.name.last.localeCompare(a.name.last);
      } else 

      if (criteria === "login.username") {
        return sortOrderState === "descending" 
        ? a.login.username.localeCompare(b.login.username)
        : b.login.username.localeCompare(a.login.username);
      } else {

        const nameA = a[criteria]
        const nameB = b[criteria];

        if (nameA < nameB) {
          return sortOrderState === "descending" ? -1 : 1;
        }
        if (nameA > nameB) {
          return sortOrderState === "descending" ? 1 : -1;
        }
        return 0;
      }
    });
    updateSortedEmployees(updateSort);
    toggleSort();
  }

  const toggleSort = () => {
    if (sortOrderState === "descending") {
      setSortOrderState("ascending");
    } else {
      setSortOrderState("descending");
    }
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" onClick={() => {sortEmployees("login.username")}}>User Name<span className="pointer"></span></th>
            <th scope="col" onClick={() => {sortEmployees("name.first")}}>First</th>
            <th scope="col" onClick={() => {sortEmployees("name.last")}}>Last</th>
            <th scope="col" onClick={() => {sortEmployees("phone")}}>Main Phone</th>
            <th scope="col" onClick={() => {sortEmployees("cell")}}>Mobile Phone</th>
            <th scope="col" onClick={() => {sortEmployees("email")}}>Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map(
            ({
              picture: { thumbnail },
              cell,
              phone,
              gender,
              email,
              name: { first, last },
              login: { username }
            }) => (
              <tr key={email}>
                <td>
                  <img src={thumbnail} alt="employeePhoto" className="rounded-sm shadow p-1 mb-2 bg-darkgray rounded"></img>
                </td>
                <td>{username}</td>
                <th>{first}</th>
                <th>{last}</th>
                <td>{phone}</td>
                <td>{cell}</td>
                <td>{email}</td>
                <Gender gender={gender}/>
                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}