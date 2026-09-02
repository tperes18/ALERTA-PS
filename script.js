const diaDaEntrega = new Date('October 23, 2026 00:00:00').getTime();
const aviso = document.querySelector('#aviso');
const subtitulo = document.querySelector('#subtitulo');
const gifAlerta = document.querySelector('#gif');

function atualizarDiasRestantes() {
    const hoje = new Date().getTime();

    const tempoRestante = diaDaEntrega - hoje;

    if (tempoRestante <= 0) {
        aviso.textContent = 'O dia chegou.';
        aviso.style.fontSize = '7vw';
        return 0;
    }

    const milisegundosEmUmDia = 1000 * 60 * 60 * 24;
    const diasRestantes = Math.ceil(tempoRestante / milisegundosEmUmDia);

    if (diasRestantes === 1) {
        aviso.innerHTML = `Falta <span id="vermelho">${diasRestantes}</span> dia`;
        subtitulo.innerHTML = `Para a entrega das 20 funcionalidades de projeto de software`;
        return diasRestantes;
    }

    aviso.innerHTML = `Faltam <span id="vermelho">${diasRestantes}</span> dias`;
    subtitulo.innerHTML = `Para a entrega das 20 funcionalidades de projeto de software`;
    return diasRestantes;
}

// diasRestantes -> quantos dias faltam para o fim
// prazoInicial -> quantos dias tínhamos quando soubemos do prazo
// tamanhoMinimo -> tamanhoMinimo do alerta
// tamanhoMaximo -> tamanhoMaximo do alerta
function definirTamanhoAlerta(elementoAlerta, diasRestantes, prazoInicial = 51, tamanhoMinimo = 20, tamanhoMaximo = 80) {
    // DEFINIR VALOR DO TAMANHO
    if (diasRestantes > prazoInicial) {
        diasRestantes = prazoInicial;
    } else if (diasRestantes < 0) {
        diasRestantes = 0;
    }

    const porcentagemConcluida = 1 - (diasRestantes / prazoInicial);

    const tamanhoAlerta = (((tamanhoMaximo - tamanhoMinimo) * porcentagemConcluida) + tamanhoMinimo).toFixed(1);

    // APLICAR TAMANHO NO ELEMENTO
    
    elementoAlerta.style.height = `${tamanhoAlerta}vw`;
}

const diasRestantes = atualizarDiasRestantes();
definirTamanhoAlerta(gifAlerta, diasRestantes);