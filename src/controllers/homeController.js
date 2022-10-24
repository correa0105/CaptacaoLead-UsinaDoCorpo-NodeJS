const fetch = require("node-fetch");

exports.paginaInicial = (request, response) => {
    response.render("index");
}

exports.enviarFormulario = (request, response) => {

    function selectUnidade(unidade) {
        if (unidade == "Andradas") return 1;
        if (unidade == "Bento") return 2;
        if (unidade == "Protasio") return 3;
        if (unidade == "Wenceslau") return 4;
        if (unidade == "24 de Outubro") return 5;
        if (unidade == "Mauricio Cardoso") return 6;
        if (unidade == "Novo Hamburgo") return 7;
        if (unidade == "Gravatai Centro") return 8;
        if (unidade == "Gravatai 67") return 9;
        if (unidade == "Cachoeirinha") return 10;
        if (unidade == "Canoas Centro") return 11;
        if (unidade == "Boqueirão") return 12;
        if (unidade == "Viamão") return 13;
        if (unidade == "Alvorada") return 14;
        if (unidade == "São Leopoldo") return 15;
        if (unidade == "Caxias Shopping") return 16;
        if (unidade == "Caxias Centro") return 17;
        if (unidade == "Azenha") return 18;
        if (unidade == "Dr Flores") return 19;
        if (unidade == "Cavalhada") return 20;
    }

    const requestInput = request.body;

    const unidade = selectUnidade(requestInput.academia);
    const linkRedirect= `https://vendas.online.sistemapacto.com.br/planos?un=${unidade}&k=24f76f3d10e690809a26d615e4f929f4`;
    
    const configMail = {
        "host_smtp": "smtp19.xmailer.com.br",
        "usuario_smtp": "usina@usinadocorpoacademia.com.br",
        "senha_smtp": "mw0gzp49ba",
        "emailRemetente": "usina@usinadocorpoacademia.com.br",
        "nomeRemetente": "Usina do Corpo Academia",
        "emailDestino": ["postmaster@xmailer.com.br","contato.lucas0105@gmail.com"],
        "assunto": "ENVIANDO POR",
        "mensagem": `
        <h1>Nome: ${requestInput.name}</h1> 
        <h1>Email: ${requestInput.email}</h1>
        <h1>Numero: ${requestInput.tel}</h1>
        <h1>Unidade: ${requestInput.academia}</h1>`
    }

    const url = "https://api.xmailer.com.br/";
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(configMail)
    }

    fetch(url, options)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    response.redirect(`${linkRedirect}`);
}
