$(document).ready(function() {
    $('#sortForm').on('submit', function(event) {
        event.preventDefault();
        let numbers = $('#numbers').val().split(',').map(Number);
        $.ajax({
            url: 'https://localhost:7280/api/sort', 
            type:'POST',
            contentType: 'application/json',
            data: JSON.stringify(numbers),
            success: function(response) {
                $('#resultsTableBody').empty();
                for (let algorithm in response) {
                    let row = `<tr>
                        <td>${algorithm}</td>
                        <td>${response[algorithm].toFixed(2)}</td>
                    </tr>`;
                    $('#resultsTableBody').append(row);
                }
            },
            error: function(error) {
                console.log(error);
                alert('An error occurred: ' + error.responseText);
            }
        });
    });
});
