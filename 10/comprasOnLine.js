//produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

//clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

const adcionarItemAoCarrinho = (cliente, produto, quantidade) => {
    const itemIndex = cliente.carrinho.findIndex (item => item.item.nome === produto.nome);
    if (itemIndex !== -1) {
        cliente.carrinho[itemIndex].quantidade += quantidade;
    } else {
        cliente.carrinho.push({ item : produto, quantidade: quantidade});
    }
};

adcionarItemAoCarrinho (jose, tv, 1);
adcionarItemAoCarrinho(jose, caboUsb, 2);
adcionarItemAoCarrinho(jose, webcam, 1);

adcionarItemAoCarrinho(carlos, notebook, 2);

adcionarItemAoCarrinho(patricia, teclado, 1);
adcionarItemAoCarrinho(patricia, caboUsb, 2);
adcionarItemAoCarrinho(patricia, carregador, 1);
adcionarItemAoCarrinho(patricia, mouse, 1);
adcionarItemAoCarrinho(patricia, monitor, 1);

adcionarItemAoCarrinho(renato, webcam, 5);

adcionarItemAoCarrinho(roberto, webcam, 1);
adcionarItemAoCarrinho(roberto, caboUsb, 2);
adcionarItemAoCarrinho(roberto, monitor, 1);

console.log(patricia);
console.log(carlos);
console.log(renato);
console.log(jose);
console.log(roberto);