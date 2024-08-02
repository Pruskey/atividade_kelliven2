let estaFrio = true;
if (estaFrio) {
    console.log("Está frio.");
} else {
    console.log("Não está frio.");
}
estaFrio = !estaFrio;
console.log("Novo valor de estaFrio:", estaFrio);
let estaQuente = false;
let andResultado = estaFrio && estaQuente;
let orResultado = estaFrio || estaQuente;
console.log("Resultado de estaFrio && estaQuente:", andResultado);
console.log("Resultado de estaFrio || estaQuente:", orResultado);