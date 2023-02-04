const funcionamento = document.querySelector("#funcionamento")
const modalFuncionamento = document.querySelector("#modalFuncionamento")
const desfocar = document.querySelector("#desfocar")
const fechar = document.querySelector("#fechar")

funcionamento.addEventListener("click", function(){
    desfocar.style.visibility = "visible";
    modalFuncionamento.style.visibility = "visible";
});

fechar.addEventListener('click', ()=>{
    desfocar.style.visibility = "hidden";
    modalFuncionamento.style.visibility = "hidden";
})