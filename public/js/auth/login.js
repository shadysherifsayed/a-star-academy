$(document).on('click', '#logOutAll', function () {
    CSRFToken();
    $.ajax({
        type: "POST",
        url: "/users/logoutalldevices",
        data: {
            owner: $(this).attr('data-error-owner')
        },
        success: function (response, textStatus) {
            if (textStatus.toLowerCase() === 'success') {
                swal.fire({
                    title: 'Logout is done',
                    text: 'All other login sessions have been deactivated, you can login now from this device.',
                    type: 'success',
                    confirmButtonText: 'Ok',

                })
            }
        }
    });
});


$("#password-forget").click(() => {
    $('#login').slideUp(() => {
        $("#password-reset").slideDown();
    })
});

$("#login-back").click(() => {
    $('#password-reset').slideUp(() => {
        $("#login").slideDown();
    })
});