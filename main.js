function addRow() {
  var table = document.getElementById("persons");
  let elementById = document.getElementById("inputTextForAdd");
  var text = elementById.value.toString().split(" ");

  let length = table.rows.length;

  let row = table.insertRow(length);
  var cellId = row.insertCell(0);
  var cellName = row.insertCell(1);
  var cellSurname = row.insertCell(2);

  cellId.innerHTML = length.toString();
  cellName.innerHTML = text[0];
  cellSurname.innerHTML = text[1];
}

function createTable() {
  var table = document.getElementById("persons");
  if (table != null) {
    alert("Таблица уже создана");
  } else {
    let htmlTableElement = document.createElement('table');
    htmlTableElement.setAttribute('id', "persons");
    createHeaders(htmlTableElement);
    document.body.appendChild(htmlTableElement);
    document.getElementById("btnAdd").disabled = false;
    document.getElementById("btnDel").disabled = false;
    document.getElementById("inputTextForAdd").disabled = false;
    document.getElementById("inputTextForDelete").disabled = false;
  }
}

function removeRow() {
  let elementById = document.getElementById("inputTextForDelete");
  let table = document.getElementById("persons");
  let idNumber = Number(elementById.value.toString());

  if (idNumber.toString() === "NaN") {
    alert("Вы ввели не номер");
    return;
  }
  var valid = false;
  for (let i = 1, row; row = table.rows[i]; i++) {
    if (idNumber === Number(row.cells[0].innerText)) {
      valid = true;
    }
  }

  if (valid === false) {
    alert("Такого id не существует!");
    return;
  } else {
    table.deleteRow(idNumber);
  }

  for (let i = 1, row; row = table.rows[i]; i++) {
    row.cells[0].innerText = i;
  }
}

function createHeaders(table) {
  var th = document.createElement('thead');
  var tr = document.createElement('tr');
  var id = document.createElement('td');
  id.appendChild(document.createTextNode('ID'));
  var name = document.createElement('td');
  name.appendChild(document.createTextNode('Имя'));
  var surname = document.createElement('td');
  surname.appendChild(document.createTextNode('Фамилия'));
  tr.appendChild(id);
  tr.appendChild(name);
  tr.appendChild(surname);
  th.appendChild(tr);
  table.appendChild(th);
}
