function Calcular(){
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;
    
    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }
    res.innerHTML = `${SOMA}` // imprime a variável soma após o loop while ter sido concluído
}