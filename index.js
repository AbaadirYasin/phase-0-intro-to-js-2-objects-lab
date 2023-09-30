const employee = {
    name: "Ali Abaadir",
    streetAddress: " lenana St",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Ali Abaadir");
  const deletedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
  
  console.log(updatedEmployee);
  console.log(deletedEmployee);
  