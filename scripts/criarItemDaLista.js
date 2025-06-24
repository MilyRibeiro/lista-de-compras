import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista() {
    // console.log(inputItem.value);

    if(inputItem.value === "") {
        alert("Por favor, digite um item.");
        return;
    };

    const itemDaLista = document.createElement('li');
    // console.log(itemDaLista);
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = `checkbox-${contador++}`;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener('click', function() {
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through';
        } else {
            nomeItem.style.textDecoration = 'none';
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    // console.log(dataCompleta);
    itemData.classList.add('texto-data');

    // itemDaLista.appendChild(dataCompleta);
    itemDaLista.appendChild(itemData);    

    return itemDaLista;
}