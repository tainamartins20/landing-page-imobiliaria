/*Validando o Formulário*/


$(function() {

//Funções para estilizar o campo do formulário
    function aplicarCampoInvalido(el) {
        el.css('color', 'red');
        el.css('border', '2px solid red')
        el.val('Campo inválido!');
    }

    function resetarCampoInvalido(el) {
        el.css('color', '#333333');
        el.css('border', '1px solid #ccc');
        el.val('');
    }

//Funções para verificar nossos campos

    function verificarNome(nome) {
        if (nome == '') {
            return false;
        }
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');

        if (amount >= 2) {
            for (var i = 0; i < amount; i++) {
                if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {

                }else {
                    return false;
                }
            }
        }else {
            return false;
        }
    }

    function verificarTelefone(telefone) {
        if (telefone == '') {
            return false;
        }
        if (telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null) {
            return false;
        }
    }

    function verificarEmail(email) {
        if (email == '') {
            return false;
        }
        if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null) {
            return false;
        }
    }

//Manipulação de eventos

    $('input[type=text]').focus(function() {
        resetarCampoInvalido($(this));
    })

    $('form#form').submit(function(e) {
        e.preventDefault();

        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if (verificarNome(nome) == false) {
            aplicarCampoInvalido($('input[name=nome]'));
            return false;
        } else if (verificarTelefone(telefone) == false) {
            aplicarCampoInvalido($('input[name=telefone]'));
            return false;
        } else if (verificarEmail(email) == false) {
            aplicarCampoInvalido($('input[name=email]'));
            return false;
        } else {
            alert('Formulário enviado com sucesso!');
        }
    })




})