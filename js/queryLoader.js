$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
    setTimeout(function(){$('#page-preloader').fadeOut('slow')},5000);
});
