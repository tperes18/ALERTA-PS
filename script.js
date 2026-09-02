const diaDaEntrega = new Date('October 23, 2026 00:00:00').getTime();
const aviso = document.querySelector('#aviso');
const subtitulo = document.querySelector('#subtitulo');

function atualizarDiasRestantes() {
    const hoje = new Date().getTime();

    const tempoRestante = diaDaEntrega - hoje;

    if (tempoRestante <= 0) {
        aviso.textContent = 'O dia chegou.';
        return;
    }

    const milisegundosEmUmDia = 1000 * 60 * 60 * 24;
    const diasRestantes = Math.ceil(tempoRestante / milisegundosEmUmDia);

    

    aviso.innerHTML = `Faltam <span id="vermelho">${diasRestantes}</span> dias`;
    subtitulo.innerHTML = `Para a entrega das 20 funcionalidades de projeto de software`
}

function definirTamanhoAlerta(diasRestantes) {
    // max: 100vw
    // min (51 dias ou menos): 20vw
    
    const tamanhoMax = 100;
    const tamanhoMin = 20;

    // TODO: definir equação para calcular tamanhoAlerta;

    return tamanhoAlerta;
}

atualizarDiasRestantes();