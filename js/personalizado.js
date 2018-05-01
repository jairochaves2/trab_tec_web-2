$(document).ready(function () {
    $(".formulario").validate({
        rules: {
            nome: {
                required: true,
                minlength: 1
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 1
            }
        },
        messages: {
            nome: {
                required: "Este campo é obrigatório!",
                minlength: "O número de caracteres digitado não é suficiente!"
            },
            email: {
                required: "Este campo é obrigatório!",
                minlength: "O número de caracteres digitado não é suficiente!",
                email: "E-mail inválido"
            },
            mensagem: {
                required: "Este campo é obrigatório!",
                minlength: "O número de caracteres digitado não é suficiente!"
            }
        }
    });
});