
// Classe Contato
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

// Função para capturar os dados do formulário
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

// Função de validação do nome
function Enviar() {
    var nome = document.getElementsByName("nome")[0];

    if (nome.value.trim() !== "") {
        alert('Obrigado sr(a) ' + nome.value + ', seus dados foram encaminhados com sucesso!');
    } else {
        alert('Por favor, preencha o campo de nome corretamente.');
    }
}



