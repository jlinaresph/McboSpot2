let valores= document.querySelectorAll(".num");
let intervalo = 2000;
let contenedor = document.querySelector(".contenedorNumeros");

let activo = false;

window.addEventListener("scroll", () => {

    if(pageYOffset > contenedor.offsetTop - contenedor.offsetHeight - 200 && activo === false){

        activo = true;
        valores.forEach((valor) => {
            let valorInicial = 0;
            let valorFinal = parseInt(valor.getAttribute("data-val"));
            let duracion = Math.floor(intervalo / valorFinal);
            let incrementar = setInterval(function () {
                
                valorInicial += 1;
                valor.textContent = valorInicial;
                if (valorInicial == valorFinal){
                    valor.textContent =  valor.textContent + "+";
                    clearInterval(incrementar);
                }
            }, duracion);
        })

    }



})

