
var entry = document.getElementById("entry");

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];

var n = 1;
var x = 0;

function AddRow(){
    var AddRown = document.getElementById("show");
    var NewRow = AddRown.insertRow(n);

    
  list1[x] = document.getElementById("emp-name").value;
  list2[x] = document.getElementById("emp-id").value;
  list3[x] = document.getElementById("emp-dob").value;
  list4[x] = document.getElementById("emp-gender").value;
  list5[x] = document.getElementById("emp-Mobile").value;
  list6[x] = document.getElementById("emp-Department").value;

  if (list1[x] == 0) {
    // alert("FILL OUT All Fields");
    document.getElementById("errorUname").innerHTML = "Employee Name Can't be empty";

  }
  else if (list2[x] == 0) {
    document.getElementById("errorUID").innerHTML = "Employee ID Can't be empty";
  }
  else if (list3[x] == 0) {
    document.getElementById("errordob").innerHTML = "DOB Can't be empty";
  }
  else if (list4[x] == "Select Gender") {
    document.getElementById("errorgender").innerHTML = "Gender Can't be empty";
  }
  else if (list5[x] == 0) {
    document.getElementById("errormob").innerHTML = "Mobile Can't be empty";
  }
  else if (list6[x] == "Select Department") {
    document.getElementById("errordep").innerHTML = "Department Can't be empty";
  }
  else if (list1[x] != 0 || list2[x] != 0 || list3[x] != 0 || list4[x] != 0 || list5[x] != 0 || list6[x] != 0) {
    document.getElementById("errorUname").innerHTML = "";
    document.getElementById("errorUID").innerHTML = "";
    document.getElementById("errordob").innerHTML = "";
    document.getElementById("errorgender").innerHTML = "";
    document.getElementById("errormob").innerHTML = "";
    document.getElementById("errordep").innerHTML = "";
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];

    n++;
    x++;

  }
}