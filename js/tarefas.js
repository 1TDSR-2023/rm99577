let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();

    const inputTarefa = document.querySelector("#idTarefa");

    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.querySelector("#lista-tarefa");

    let li = document.createElement("li");

    li.textContent = inputTarefa.value

    listaTarefasUL.appendChild(li);

    let botaoApagaTarefa = document.createElement("button")

    botaoApagaTarefa.textContent = " X ";

    li.appendChild(botaoApagaTarefa);

    botaoApagaTarefa.addEventListener("click", (e)=>{

        e.target.parentNode.remove()

        listaTarefasArray.forEach(tarefa=>{
            if (tarefa == e.target.parentNode.textContent.split(" ")[0]){
                listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1)
            }
        });
        
        console.log(e.target.parentNode.textContent.split(" ")[0]);
    })

    console.log(listaTarefasArray); 
    inputTarefa.value = "";
})