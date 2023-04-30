import { employees } from "./App";

export function CompanyEmployees() {
  return (
    <div>
      <h1>Employees Details</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <span style={{ color: "red" }}>{employee.name} </span>Department:
            {employee.department}, Salary: {employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}
