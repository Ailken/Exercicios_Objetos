const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

for (let i = 0; i < participantes.length; i++) {
    const participante = participantes [i];
    if (participante.nome === "Carlos") {
        const posicao = i + 1;
        console.log(`Galera... O Carlos esta na posição ${posicao}. Corre lá!`);
        break;
    }
}