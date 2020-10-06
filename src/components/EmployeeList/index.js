import React, { useState, useEffect }  from "react";
import Gender from '../Gender';

export default function EmployeeList({ employees }) {
  const [sortedEmployees, updateSortedEmployees] = useState([]);

  useEffect(() => 
    updateSortedEmployees(employees), [employees]
  );

  return (
    <div className="card">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">User Name</th>
            <th scope="col"
              onClick={() => {
                const employeesCopy = [...employees];
                const updateSort = employeesCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  return 0;
                });
                updateSortedEmployees(updateSort);
              }}
            >First</th>
            <th scope="col">Last</th>
            <th scope="col">Main Phone</th>
            <th scope="col">Mobile Phone</th>
            <th scope="col">Email</th>
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
                  <img src={thumbnail} alt="employeePhoto"></img>
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
