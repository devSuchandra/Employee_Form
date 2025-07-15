window.onload = function () {
  const submitBtn = document.getElementById("submitBtn");
  const tableBody = document.querySelector("#employeeTable tbody");

  submitBtn.onclick = function () {
    // Get form values
    const empId = document.getElementById("empId").value.trim();
    const empName = document.getElementById("empName").value.trim();
    const company = document.getElementById("company").value.trim();
    const salary = document.getElementById("salary").value.trim();

    // Simple validation
    if (!empId || !empName || !company || !salary) {
      alert("Please fill in all fields.");
      return;
    }

    // Create table row
    const row = document.createElement("tr");
    
//document.getElementById("tablecnt").style.display = "table"; // updateeee

    // Checkbox cell
    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);

    // Data cells
    const empIdCell = document.createElement("td");
    empIdCell.textContent = empId;
    row.appendChild(empIdCell);

    const empNameCell = document.createElement("td");
    empNameCell.textContent = empName;
    row.appendChild(empNameCell);

    const companyCell = document.createElement("td");
    companyCell.textContent = company;
    row.appendChild(companyCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = salary;
    row.appendChild(salaryCell);

    // Delete button
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
  if (!checkbox.checked) {
    alert("Please check the box to delete.");
    return;
  }

  const confirmDelete = confirm("Are you sure you want to delete this row?");
  
  if (confirmDelete) {
    row.remove();
  }
//   if (tableBody.rows.length === 0) { //// updateeee
//     document.getElementById("tablecnt").style.display = "none"; //// updateeee
//   } //// updateeee
    };
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    // Add row to table
    tableBody.appendChild(row);

    // Clear inputs
    document.getElementById("employeeForm").reset();

    //Clear All button
    const clearAllBtn = document.getElementById("clearAllBtn");

clearAllBtn.onclick = function () {
  const tableBody = document.querySelector("#employeeTable tbody");
  
  if (tableBody.rows.length === 0) {
    alert("Table is already empty.");
    return;
  }

  const confirmClear = confirm("Are you sure you want to clear all employee records?");
  
  if (confirmClear) {
    
  //document.getElementById("tablecnt").style.display = "none"; // updateeee

//document.getElementById()
      tableBody.innerHTML = ""; // Clears all rows
    setTimeout(() => { //// updateeee
    alert("All employee data has been cleared."); // // updateeee
  }, 0); // updateeee
  }
};
  }
};