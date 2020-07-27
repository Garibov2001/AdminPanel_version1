/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Jsgrid Js
 */



$(function () {

  $("#jsGrid").jsGrid({
    height: "70%",
    width: "100%",
    filtering: true,
    editing: false,
    inserting: false,
    sorting: true,
    paging: true,
    autoload: true,
    pageSize: 15,
    pageButtonCount: 5,
    deleteConfirm: "Bu tələbəni silmək istəyirsinizmi?",
    controller: db,
    fields: [
      { name: "Status", type: "select", items: db.status, valueField: "Id", textField: "Name", width: 40 },
      { name: "Ad", type: "text", width: 50 },
      { name: "Soyad", type: "text", width: 50 },
      { name: "Email", type: "text", width: 100 },
      { name: "Telefon", type: "number", width: 100, color: "red" },
      { type: "control" }
    ]
  });

});
