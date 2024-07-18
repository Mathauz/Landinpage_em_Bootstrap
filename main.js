$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        var isValid = true;

        
        if ($('#nome').val().trim() === '') {
            $('#nome').addClass('is-invalid');
            isValid = false;
        } else {
            $('#nome').removeClass('is-invalid');
        }

        
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test($('#email').val().trim())) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        if (isValid) {
            alert('Formulário enviado com sucesso!');
        }
    });
});