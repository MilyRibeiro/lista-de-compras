import { criarItemDaLista } from "./scripts/criarItemDaLIsta.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDecompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(evento);
    listaDecompras.appendChild(itemDaLista);
    verificarListaVazia(listaDecompras);
});

verificarListaVazia(listaDecompras);
