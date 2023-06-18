

document.addEventListener('DOMContentLoaded', function() {
  const faker = [
    {
      firstName: 'raj',
      lastName: 'vujay'
    },
    {
      firstName: 'raj',
      lastName: 'vujay'
    },
    {
      firstName: 'raj',
      lastName: 'vujay'
    }
  ];

  const employees = [];

  function generateEmployeeId() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  function generateEmployeeName() {
    const fakePerson = faker[Math.floor(Math.random() * faker.length)];
    return `${fakePerson.firstName} ${fakePerson.lastName}`;
  }

  function generateEmployeeEmail(firstName, lastName, companyName) {
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${companyName}.com`;
    return email;
  }

  function GenerateEmpDetails(empId, fullName, email, companyName) {
    this.empId = empId;
    this.fullName = fullName;
    this.email = email;
    this.companyName = companyName;
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const empCount = parseInt(document.getElementById('empCount').value);
    console.log("empCount", empCount);

    const companyName = document.getElementById('companyName').value;
    console.log("Company name", companyName);

    employees.length = 0; // Clear the employees array before generating new ones

    for (let i = 0; i < empCount; i++) {
      const id = generateEmployeeId();
      const fullName = generateEmployeeName();
      const email = generateEmployeeEmail(fullName, companyName);
      const employee = new GenerateEmpDetails(id, fullName, email, companyName);
      employees.push(employee);
    }

    displayEmployees(employees);
  }

  function displayEmployees(employees) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];

      const employeeDetails = document.createElement('div');
      employeeDetails.innerHTML = `
        <p>Employee ID: ${employee.empId}</p>
        <p>Name: ${employee.fullName}</p>
        <p>Email: ${employee.email}</p>
        <p>Company: ${employee.companyName}</p>
        <hr>
      `;
employeeDetails.className='empDetails'
      employeeList.appendChild(employeeDetails);
    }
  }

  const form = document.querySelector('.emp-form');
  form.addEventListener('submit', handleFormSubmit);
});
