function CalcularQuantoDiasCusta() {
    let salario = document.getElementById('salario').value
    let diasTrabalho = document.getElementById('dias-trabalho').value
    let valorProduto = document.getElementById('valor-produto').value
    
    if(!validaCamposPreenchido([salario, diasTrabalho, valorProduto])) {
        return
    }

    let valorDiaTrabalho = normalizarParaCalcular(salario)/diasTrabalho
    let quantoDiasCusta = normalizarParaCalcular(valorProduto)/valorDiaTrabalho
    console.log(valorDiaTrabalho)
    let divResultado = document.getElementById('resultado')
    let retorno = `
    <p>
        Seu dia de trabalho vale 
        <b>R$${valorDiaTrabalho.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}.</b> 
    </p>
    <p>
        Para adquirir esse produto você precisará trabalhar aproximadamente <b>${Math.round(quantoDiasCusta)}</b> dias (sem gastar nada).
    </p>`
    divResultado.innerHTML = retorno
}

function normalizarParaCalcular(valor){
    return valor.replace(',', '.')
}

function validaCamposPreenchido(arrayCampos) {
    let campoPreenchido = true
    arrayCampos.forEach(element => {
        if(element == ''){
            campoPreenchido = false
        }
    });
    return campoPreenchido
}
