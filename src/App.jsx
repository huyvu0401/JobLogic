import godFatherBg from "./assets/img/header/godfather-header.jpg";
import data from "./EmployeeData.json";

import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeDetail from "./EmployeeDetail/EmployeeDetail";

import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState(data.employees);
  const [currentEmployee, setCurrentEmployee] = useState(data.employees[0]);

  const handleOnSliderChange = (newPopularity) => {
    const newEmployees = [...employees].map((employee) => {
      if (employee.name === currentEmployee.name) {
        return {
          ...employee,
          popularity: newPopularity,
        };
      } else {
        return employee;
      }
    });
    setEmployees(newEmployees);
    setCurrentEmployee((prev) => ({
      ...prev,
      popularity: newPopularity,
    }));
  };

  const handleUpdateCurrentEmployee = (newEmployee) => {
    setCurrentEmployee(newEmployee);
  };

  return (
    <div className="h-screen w-screen bg-main-bg relative">
      <div
        className="w-full h-2/5 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${godFatherBg})`,
          backgroundPosition: "50% 30%",
        }}
      ></div>
      <EmployeeList
        employees={employees}
        currentEmployee={currentEmployee}
        onUpdateCurrentEmployee={handleUpdateCurrentEmployee}
      />
      <EmployeeDetail
        employee={currentEmployee}
        onSliderChange={handleOnSliderChange}
      />
    </div>
  );
}

export default App;
