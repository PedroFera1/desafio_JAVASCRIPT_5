

class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}


function Post(form) {
    let data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );

    console.log("Dados do usuário:", data);
    alert('Obrigado, ' + data.nome + '! Sua mensagem foi enviada com sucesso.');
}


function Enviar() {
    var nome = document.getElementsByName("nome")[0];

    if (nome.value.trim() !== "") {
        alert('Obrigado sr(a) ' + nome.value + ', seus dados foram encaminhados com sucesso!');
    } else {
        alert('Por favor, preencha o campo de nome corretamente.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const termsCheckbox = document.getElementById('termsConsent');
    const marketingConsent = document.getElementById('marketingConsent');
    const submitButton = document.getElementById('submitButton');
    const form = document.querySelector('form');

   
    if (submitButton) {
        submitButton.disabled = true;
    }

    
    if (termsCheckbox && submitButton) {
        termsCheckbox.addEventListener('change', function() {
            submitButton.disabled = !this.checked; 
        });
    }

    
    window.Post = function(formElement) {
        event.preventDefault(); 

        if (termsCheckbox.checked) {
           
            const nome = formElement.nome.value;
            const email = formElement.email.value;
            const cpf = formElement.cpf.value;
            const sobrenome = formElement.sobrenome.value;
            const telefone = formElement.telefone.value;            
            const contactPreference = formElement.contact_preference ? formElement.contact_preference.value : 'N/A'; 
            const message = formElement.message ? formElement.message.value : ''; 
            const termsAccepted = termsCheckbox.checked ? 'Aceito' : 'Não Aceito';
            const marketingAccepted = marketingConsent.checked ? 'Sim' : 'Não';

            alert(
                'Formulário enviado com sucesso!\n\n' +
                'Dados Coletados:\n' +
                'Nome: ' + nome + '\n' +
                'E-mail: ' + email + '\n' +
                'CPF: ' + cpf + '\n' +
                'Sobrenome: ' + sobrenome + '\n' +
                'Telefone: ' + telefone + '\n' +
                'Preferência de Contato: ' + contactPreference + '\n' +
                'Mensagem: ' + message + '\n\n' +
                'Consentimentos:\n' +
                'Termos e Condições: ' + termsAccepted + '\n' +
                'Receber Novidades: ' + marketingAccepted
            );
            
            
            formElement.reset();
        } else {
            alert('Você precisa aceitar os Termos e Condições para enviar o formulário.');
        }
    };
});


