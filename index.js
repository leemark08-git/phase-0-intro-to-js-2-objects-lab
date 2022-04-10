const employee = {
    name: "Leemark Guiruela", 
    streetAddress: "110 Madison Ave",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return({...employee,[key]: value,})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee[key] = value 
return employee
}