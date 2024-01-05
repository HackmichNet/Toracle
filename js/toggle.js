$(document).ready(function() {
    $('#theme-button').click(function() {
        $('body').toggleClass('dark-theme');
        if ($('body').hasClass('dark-theme')) {
            $('.navbar').removeClass('navbar-light bg-light').addClass('navbar-dark bg-dark');
        } else {
            $('.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-light');
        }
    });
});