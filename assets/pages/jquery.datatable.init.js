/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Datatables Js
 */


$(document).ready(function () {
    $('#datatable').DataTable();

    $(document).ready(function () {
        $('#datatable2').DataTable();
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

    $('#row_callback').DataTable({
        "createdRow": function (row, data, index) {
            if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                $('td', row).eq(5).addClass('highlight');
            }
        }
    });

});

/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Əməiyyatçı:</td>' +
        '<td>' + d.person + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Əməliyyat Qeydi:</td>' +
        '<td>' + d.extn + '</td>' +
        '</tr>' +
        '</table>';
}

$(document).ready(function () {
    var table = $('#child_rows').DataTable({
        // "ajax": "../../plugins/datatables/objects.txt",
        "data": testdata.data,
        select: "single",
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "full_name" },
            { "data": "person" },
            { "data": "type" },
            { "data": "date" },
            { "data": "status" },
            { "data": "action" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#child_rows tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});

var testdata = {
    "data": [
        {
            "full_name": "Tarlan Soltanov",
            "person": "Ləman Abdullayeva",
            "type": "Telefon",
            "date": "01/08/2020 15:00",
            "status": '<span class="badge badge-md badge-soft-success">Baxılmış</span>',
            "extn": "Tələbə 2 gün xaricdə olacağı haqqında məlumat verdi.",
            "action": '<a href="#" class="mr-2"><i class="fas fa-edit text-info font-16"></i></a><a href="#" class="mr-2"><i class="fas fa-trash-alt text-danger font-16"></i></a>'

        },
        {
            "full_name": "Rübabə Şabanpva",
            "person": "Ləman Abdullayeva",
            "type": "Facebook",
            "date": "01/08/2020 15:00",
            "status": '<span class="badge badge-md badge-soft-danger">Baxılmamış</span>',
            "extn": "Şəxs qiymət haqqinda məlumat əldə etmək üçün müraciət etdi",
            "action": '<a href="#" class="mr-2"><i class="fas fa-edit text-info font-16"></i></a><a href="#" class="mr-2"><i class="fas fa-trash-alt text-danger font-16"></i></a>'

        },
        {
            "full_name": "Ülvi Nəcəfli",
            "person": "Ləman Abdullayeva",
            "type": "Whatsapp",
            "date": "01/08/2020 15:00",
            "status": '<span class="badge badge-md badge-soft-warning">Gözləmədə</span>',
            "extn": "Şəxs Tələbə kimi qeydiyyatdan keçmək üçün müraciət etdi.",
            "action": '<a href="#" class="mr-2"><i class="fas fa-edit text-info font-16"></i></a><a href="#" class="mr-2"><i class="fas fa-trash-alt text-danger font-16"></i></a>'

        },]
}