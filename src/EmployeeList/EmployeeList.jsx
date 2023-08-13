import { useState } from "react";
import godfatherLogo from "../assets/img/logo/the-godfather.svg";
import "./index.css";

function EmployeeList({ employees, currentEmployee, onUpdateCurrentEmployee }) {
  const renderEmployeeListItems = () => {
    return employees.map((employee, index) => {
      if (employee.name === currentEmployee.name) {
        return (
          <li
            key={index}
            className="active cursor-pointer"
            style={{ fontSize: `${+employee.popularity + 20}px` }}
            onClick={() => onUpdateCurrentEmployee(employee)}
          >
            {employee.name}
          </li>
        );
      } else if (currentEmployee.colleagues.includes(employee.name)) {
        return (
          <li
            key={index}
            className="colleague cursor-pointer"
            style={{ fontSize: `${+employee.popularity + 20}px` }}
            onClick={() => onUpdateCurrentEmployee(employee)}
          >
            {employee.name}
          </li>
        );
      } else {
        return (
          <li
            key={index}
            className="cursor-pointer"
            style={{ fontSize: `${+employee.popularity + 20}px` }}
            onClick={() => onUpdateCurrentEmployee(employee)}
          >
            {employee.name}
          </li>
        );
      }
    });
  };

  return (
    <div className="bg-black bg-opacity-30 h-full absolute top-0 w-1/3 flex flex-col items-center">
      <img className="p-16" src={godfatherLogo} alt="Godfather Logo" />
      <ul className="mt-20 text-center">{renderEmployeeListItems()}</ul>
    </div>
  );
}

export default EmployeeList;
