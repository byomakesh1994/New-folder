//collect backend data here for dropdown

const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const Employeesservices = () => [
  { id: "1", title: "IT" },
  { id: "2", title: "HR" },
  { id: "3", title: "SALES" },
  { id: "4", title: "MANAGER" },
];

export const insertEmployees = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const generateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
  // let Departments = Employeesservices();
  // return employees.map((x) => ({
  //   ...x,
  //   department: Departments[x.departments - 1].title,
  // }));
};
