GetModoNoturno()

function GetModoNoturno(){
    let statusOS = window.matchMedia('(prefers-color-scheme: dark)').matches
    let status = JSON.parse(localStorage.getItem('darkMode'))
    if(status == null) {
        status = statusOS
    }
    document.querySelector('#night-mode').checked = status
    modoNoturno(status)
}

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
    localStorage.setItem('darkMode', status)
    if (status) {
        document.querySelector('.principal').classList.add('dark')
        document.querySelector('.link-github img').src = 'https://img.shields.io/badge/GitHub-ffffff?style=for-the-badge&logo=github&logoColor=black'
        return
    }

    document.querySelector('.principal').classList.remove('dark')
    document.querySelector('.link-github img').src = 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
}