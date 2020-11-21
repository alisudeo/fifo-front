function closeModal(){
    document.getElementById('modal').style.opacity = '0';
    document.getElementById('modal-container').style.background = 'transparent';
    setTimeout(() => {
        document.getElementById('modal-container').style.display = 'none';
    }, 300);

    document.location.reload();
}

function openModal(){
    
    document.getElementById('modal-container').style.background = 'rgba(0, 0, 0, 0.2)';
    document.getElementById('modal-container').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('modal').style.opacity = '1';
    }, 10);
}

function optionModal(x){
    let btnOne = document.getElementById('modal-button-1');
    let btnTwo = document.getElementById('modal-button-2');
    let btnThree = document.getElementById('modal-button-3');
    let select = document.getElementById('modal-select');
    let title = document.getElementById('modal-title');

    if(x === 1){
        title.innerHTML = 'Modo de jogo:';

        btnOne.setAttribute('class', 'green-button');
        btnOne.setAttribute('onclick', 'closeModal();');
        btnOne.innerHTML = 'Confirmar';

        btnTwo.setAttribute('class', 'grey-button');
        btnTwo.setAttribute('onclick', 'closeModal();');
        btnTwo.innerHTML = 'Cancelar';

        btnThree.style.display = 'none';
    }

    if(x === 2){
        title.innerHTML = 'Chegou sua vez!';

        select.style.display = 'none';
    
        btnOne.setAttribute('class', 'green-button');
        btnOne.setAttribute('onclick', 'closeModal();');
        btnOne.innerHTML = 'Jogar';
    
        btnTwo.setAttribute('class', 'yellow-button');
        btnTwo.setAttribute('onclick', 'closeModal();');
        btnTwo.innerHTML = 'Dar a vez';

        btnThree.setAttribute('class', 'red-button');
        btnThree.setAttribute('onclick', 'closeModal();');
        btnThree.innerHTML = 'Cancelar';
    }
    
    if(x === 3){
        title.innerHTML = 'Deseja mesmo sair?';

        select.style.display = 'none';
    
        btnOne.setAttribute('class', 'red-button');
        btnOne.setAttribute('onclick', 'closeModal();');
        btnOne.innerHTML = 'Sair';
    
        btnTwo.setAttribute('class', 'grey-button');
        btnTwo.setAttribute('onclick', 'closeModal();');
        btnTwo.innerHTML = 'Cancelar';

        btnThree.style.display = 'none';
    }

    if(x === 4){
        title.innerHTML = 'Finalizar partida?';

        select.style.display = 'none';
    
        btnOne.setAttribute('class', 'red-button');
        btnOne.setAttribute('onclick', 'closeModal();');
        btnOne.innerHTML = 'Finalizar';
    
        btnTwo.setAttribute('class', 'grey-button');
        btnTwo.setAttribute('onclick', 'closeModal();');
        btnTwo.innerHTML = 'Cancelar';

        btnThree.style.display = 'none';
    }

    openModal();
}