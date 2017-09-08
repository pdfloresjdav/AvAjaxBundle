$(document).ready(function() {

    // Support for AJAX loaded modal window.
    // Focuses on first input textbox after it loads the window.
    // To use it  : <a href="/url/to/load/modal_window.htm" data-toggle="modal">link</a>
    $('[data-toggle="modal"]').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var customClass = $(this).attr('data-modal-class') ? $(this).attr('data-modal-class') : '';
        if (url.indexOf('#') == 0) {
            $(url).modal('show');
        } else {
	   $.get(url, function(data) {
                if (!$("<div/>").html(data).contents().first().hasClass('modal')) {
                    data = '<div id="ajax-modal" class="modal fade' + customClass + '">' + data + '</div>';
                }
                $('body').append(data);
                $('#ajax-modal').modal('show');
            }).success(function() {
                $('input:text:visible:first').focus();
            });
           /* $.get(url, function(data) {
                $('<div class="modal hide fade ' + customClass + '">' + data + '</div>').modal();
            }).success(function() { $('input:text:visible:first').focus(); });*/
        }
    });

});
