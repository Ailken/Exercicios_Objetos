const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

usuarios.forEach((pessoa) => {
    const quantidadePets = pessoa.pets.length;
    if (quantidadePets === 0) {
        console.log(`Sou ${pessoa.nome} e não tenho pets.`);
    } else if (quantidadePets === 1) {
        console.log(`Sou ${pessoa.nome} e tenho ${quantidadePets} pet.`);
    } else {
        console.log(`Sou ${pessoa.nome} e tenho ${quantidadePets} pets.`);
    }
})