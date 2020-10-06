import React, { useState, useEffect } from "react";

export default function Search({ employees, updateEmps }) {
    const [searchInput, updateSearchInput ] = useState("");

    useEffect(() => {
        const filteredEmployees =
        searchInput === "" ? employees : employees.filter(({ name: { first } }) =>
                  first.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0
              );
    
        updateEmps(filteredEmployees);
      }, [searchInput, employees, updateEmps]);


    return (
        <div>
        <center>
            <div className="input-group input-group-lg w-25">
                <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                </div>
                <input value={searchInput} type="text" className="form-control" placeholder="type first/last name" onChange={e => updateSearchInput(e.target.value)}></input>
            </div>
        </center>
        <br></br>
        </div>
    );
}
