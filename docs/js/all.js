(function ($) {
    $('#moviesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/movies",
        "columns": [
            { "data": "id" },
            { "data": "Year" },
            { "data": "Score" },
            { "data": "Title" }
        ]
    } );

})(jQuery);
