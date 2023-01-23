function contar(){
    let inicio = document.getElementById("txti").value;
    let fim = document.getElementById("txtf").value;
    let passo = document.getElementById("txtp").value;
    let res = document.getElementById('res').value;

    if(inicio.length == 0 || fim.length == 0){
        let erromsg = document.getElementById('res');
        erromsg.style.color = 'red';
        erromsg.style.fontWeight = 'bold';
        erromsg.innerText = "[Erro] verifique os dados e tente novamente!";
        setTimeout(() => {
            location.reload();
        }, 1300);
    }else{
        let msg = document.getElementById('res');
        msg.innerHTML = "Contando:"
        let i = Number(inicio);
        let f = Number (fim);
        let p = Number(passo);

        for (let c = i; c <= f; c +=  p){
            
            msg.innerHTML += ` ${c} \u{1F3C3}`;
            
        }
        msg.innerHTML += ` - Fim \u{1F3C1}`;

    }
}