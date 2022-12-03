// creating functionasl object


totalUSers = Number(prompt("Enter the number of users:"))
function createEmployee(name, status, salary) {

    return (
        employee = {
            name: name,
            status: status,
            salary: salary
        }
    )

}

for (i = 0; i < totalUSers; i++) {

    empName = prompt("Enter employee name")
    empStatus = prompt("Enter employee status")
    empSalary = prompt("Enter employee salary")
    createEmployee(empName, empStatus, empSalary)
}