function CalcularQuantoDiasCusta() {
    let salario = document.getElementById('salario').value
    let diasTrabalho = document.getElementById('dias-trabalho').value
    let valorProduto = document.getElementById('valor-produto').value

    if (!validaCamposPreenchido([salario, diasTrabalho, valorProduto])) {
        return
    }

    let valorDiaTrabalho = normalizarParaCalcular(salario) / diasTrabalho
    let quantoDiasCusta = normalizarParaCalcular(valorProduto) / valorDiaTrabalho
    console.log(valorDiaTrabalho)
    let divResultado = document.getElementById('resultado')
    let retorno = `
    <p>
        Seu dia de trabalho vale 
        <b>R$${valorDiaTrabalho.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}.</b> 
    </p>
    <p>
        Para adquirir esse produto você precisará trabalhar aproximadamente <b>${Math.ceil(quantoDiasCusta)}</b> dias (sem gastar nada).
    </p>`
    divResultado.innerHTML = retorno
}

function normalizarParaCalcular(valor) {
    return valor.replace(',', '.')
}

function validaCamposPreenchido(arrayCampos) {
    let campoPreenchido = true
    arrayCampos.forEach(element => {
        if (element == '') {
            campoPreenchido = false
        }
    });
    return campoPreenchido
}

function modoNoturno(status) {
    let estilo = document.documentElement.style
    if (status) {
        estilo.setProperty('--background-body-color', '#060606');
        estilo.setProperty('--border-input-color', '#ffffff22');
        estilo.setProperty('--color-box-shadow', '#ffffff33');
        estilo.setProperty('--backgroud-formulario', '#0c0c0c');
        estilo.setProperty('--background-botao', '#1c74ec');
        estilo.setProperty('--cor-texto-botao', '#ffffff');
        estilo.setProperty('--cor-botao-hover', '#1c5cbc');
        estilo.setProperty('--cor-texto', '#e1d7d7');
        estilo.setProperty('--fundo-input', '#383434');
        estilo.setProperty('--cor-input', '#ffffff');
        estilo.setProperty('--placeholder-input', '#ffffff');
        document.querySelector('.link-github img').src = 'https://img.shields.io/badge/GitHub-ffffff?style=for-the-badge&logo=github&logoColor=black'
        return
    }

    estilo.setProperty('--background-body-color', '#00000011');
    estilo.setProperty('--border-input-color', '#00000022');
    estilo.setProperty('--color-box-shadow', '#00000033');
    estilo.setProperty('--backgroud-formulario', '#ffffff');
    estilo.setProperty('--background-botao', '#1c74ec');
    estilo.setProperty('--cor-texto-botao', '#ffffff');
    estilo.setProperty('--cor-botao-hover', '#1c5cbc');
    estilo.setProperty('--cor-texto', '#000000');
    estilo.setProperty('--cor-texto-botao', '#ffffff');
    estilo.setProperty('--cor-botao-hover', '#1c5cbc');
    estilo.setProperty('--cor-texto', '#000000');
    estilo.setProperty('--fundo-input', '#ffffff');
    estilo.setProperty('--cor-input', '#000000');
    estilo.setProperty('--placeholder-input', '#383434');
    document.querySelector('.link-github img').src = 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
}