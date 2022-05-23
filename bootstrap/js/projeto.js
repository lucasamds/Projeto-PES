let click = document.querySelector('.dropdown-toggle');
let menu = document.querySelector('.dropdown-menu');
let drop = document.querySelector('dropdown')
click.addEventListener("click", () => {
    menu.classList.toggle('show');
    drop.classList.toggle('show');
});

function addDisci(){
    const form = document.querySelector('.disciplina');
    if(form.style.display == 'none')
    {
        form.style.display = 'block';
    }
    else{
        form.style.display = 'none';
    }
}


const materia = document.getElementById('materia-quest');


function mostraQuestoes()
{
    console.log("entrou");
    
    if(materia.style.display === 'none')
    {
        materia.style.display = 'block';
    }
    else{
        materia.style.display = 'none';
    }
    const lista = document.getElementById('lista-quest');
    if(lista.style.display == 'none')
    {
        lista.style.display = 'block';
    }
    else{
        lista.style.display = 'none';
    }
}