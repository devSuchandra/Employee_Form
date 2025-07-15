window.onload = function () {
  const submitBtn = document.getElementById("submitBtn");
  const table = document.getElementById("employeeTable");
  const tableBody = table.querySelector("tbody");
  const clearButtonContainer = document.getElementById("clearButtonContainer");

  let theadCreated = false;

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

     // ✅ Create <thead> dynamically on first submit
    if (!theadCreated) {
      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th>Select</th>
          <th>Emp ID</th>
          <th>Name</th>
          <th>Company</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      `;
      table.insertBefore(thead, tableBody);
      theadCreated = true;
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

    row.innerHTML += `
      <td>${empId}</td>
      <td>${empName}</td>
      <td>${company}</td>
      <td>${salary}</td>
    `;

    // Data cells
    // const empIdCell = document.createElement("td");
    // empIdCell.textContent = empId;
    // row.appendChild(empIdCell);

    // const empNameCell = document.createElement("td");
    // empNameCell.textContent = empName;
    // row.appendChild(empNameCell);

    // const companyCell = document.createElement("td");
    // companyCell.textContent = company;
    // row.appendChild(companyCell);

    // const salaryCell = document.createElement("td");
    // salaryCell.textContent = salary;
    // row.appendChild(salaryCell);

    // Delete button
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        // Safely get the checkbox in the same row at click time
  const checkboxInRow = row.querySelector("input[type='checkbox']");
  if (!checkboxInRow.checked) {
    alert("Please check the box to delete.");
    return;
  }

  const confirmDelete = confirm("Are you sure you want to delete this row?");
  
  if (confirmDelete) {
    row.remove();

    if (tableBody.rows.length === 0) {
          table.querySelector("thead").remove();
          theadCreated = false;
          clearButtonContainer.innerHTML = "";
        }
  }

    };
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    // Add row to table
    tableBody.appendChild(row);

    // ✅ Show Clear All button if not already created
    if (!document.getElementById("clearAllBtn")) {
      const clearBtn = document.createElement("button");
      clearBtn.id = "clearAllBtn";
      clearBtn.className = "clear-btn";
      clearBtn.textContent = "Clear All";
      clearBtn.onclick = function () {
        const confirmClear = confirm("Are you sure you want to clear all employee records?");
        if (confirmClear) {
          tableBody.innerHTML = "";
          table.querySelector("thead").remove();
          theadCreated = false;
          clearButtonContainer.innerHTML = "";
          setTimeout(() => {
             alert("All employee data has been cleared."); 
          }, 0);
        }
      };
      clearButtonContainer.appendChild(clearBtn);
    }

    // Clear inputs
    document.getElementById("employeeForm").reset();

    //Clear All button
    // const clearAllBtn = document.getElementById("clearAllBtn");

// clearAllBtn.onclick = function () {
//   const tableBody = document.querySelector("#employeeTable tbody");
  
//   if (tableBody.rows.length === 0) {
//     alert("Table is already empty.");
//     return;
//   }

//   const confirmClear = confirm("Are you sure you want to clear all employee records?");
  
//   if (confirmClear) {
    
//   //document.getElementById("tablecnt").style.display = "none"; // updateeee

// //document.getElementById()
//       tableBody.innerHTML = ""; // Clears all rows
//     setTimeout(() => { //// updateeee
//     alert("All employee data has been cleared."); // // updateeee
//   }, 0); // updateeee
//   }
// };
  }
};