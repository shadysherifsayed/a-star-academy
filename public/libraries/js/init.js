$('#sidebar-toggle').click(function () {

    if ($('body').hasClass('sidebar-show')) {
        
        $('#sidenav').animateCss('slideOutLeft', function () {
            $('body').removeClass('sidebar-show');
            $('#sidenav').hide();
        });
    } else {
        
        $('#sidenav').show();  
        
        $('body').addClass('sidebar-show');
        
        $('#sidenav').animateCss('slideInLeft');

    }

});
$('.mdb-select').material_select();

autosize(document.querySelectorAll('textarea'));

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "4000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}