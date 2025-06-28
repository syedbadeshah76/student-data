let studentlist = [];
let editlist = null;

function studentdata() {
    let fName = document.getElementById("fname").value;
    let middName = document.getElementById("middname").value;
    let lName = document.getElementById("lname").value;
    let studentobj = {
        firstName: fName,
        middleName: middName,
        lastName: lName
    };
    if (!fName && !middName && !lName) {
        alert("please enter your detail.");
        return;  
    }

    if (editlist === null) {
        studentlist.push(studentobj);
        displayStudentList();
    } else {
        studentlist[editlist].firstName = fName;
        studentlist[editlist].middleName = middName;
        studentlist[editlist].lastName = lName;
        editlist = null;
        displayStudentList();
    }

    clear();  
}

function displayStudentList() {
    let tableHTML = "<table border=4>";
    tableHTML += "<tr><th>First Name</th><th>Middle Name</th><th>Last Name</th><th>Edit</th><th> DELETE</th></tr>";
    let count = 0;

    for (const student of studentlist) {
        tableHTML += `<tr>
                         <td>${student.firstName}</td>
                         <td>${student.middleName}</td>
                         <td>${student.lastName}</td>
                         <td><button onclick="editstudent(${count})">EDIT</button> </td>
                         <td><button onclick="deleteitem(${student.delete})">delete</button></td>
                      </tr>`;
        count++;
    }

    tableHTML += "</table>";
    document.getElementById("display").innerHTML = tableHTML;
}

function editstudent(index) {
    document.getElementById("fname").value = studentlist[index].firstName;
    document.getElementById("middname").value = studentlist[index].middleName;
    document.getElementById("lname").value = studentlist[index].lastName;
    editlist = index;
}
function deleteitem(){
    studentlist.splice(editlist, 1);
    editlist = null;
    displayStudentList();  
    clear();  

}
function clear() {
    document.getElementById("fname").value = "";
    document.getElementById("middname").value = "";
    document.getElementById("lname").value = "";
}
