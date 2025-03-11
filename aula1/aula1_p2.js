function criarTabuleiro(tamanho) {
    let tabuleiro = ""; 

    for (let i = 0; i < tamanho; i++) { 
        for (let j = 0; j < tamanho; j++) { 
            if ((i + j) % 2 === 0) {
                tabuleiro += "#"; 
            } else {
                tabuleiro += " "; 
            }
        }
        tabuleiro += "\n"; 
    }

    return tabuleiro;
}

let tabuleiro4x4 = criarTabuleiro(4);
console.log(tabuleiro4x4);


