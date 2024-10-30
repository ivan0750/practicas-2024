const x= "X";
const o= "O";
let juego = "jugador 1";
const modal = document.querySelector("dialog");
const textoModal = modal.querySelector("h2");

const botones = Array.from(document.querySelectorAll(".messi"));
 botones.forEach( boton => {
  boton.addEventListener("click", ()=> {
    if(juego === "PAUSA") return;
    //ejecutar solo un click
    if(boton.textContent !== "" ) return;
    
    boton.innerText = juego === "jugador 1" ? x : o ;
    const posicionGanadora = revisarSiHayGanador()
    if(typeof posicionGanadora === "object"){
      ganar(posicionGanadora);
      return
    }

    if(posicionGanadora === "EMPATE"){
      mostrarModal("EMPATE");
    }
    juego = juego === "jugador 1" ? "jugador 2" : "jugador 1";

  })
 });

 function revisarSiHayGanador(){
  const tablero = botones.map(boton => boton.textContent);

  //revision de ganador de manera horizontal
  for(let i = 0; i <= 9; i+=3) {
    if(tablero[i] && tablero[i] === tablero[i+1] && tablero[i] === tablero[i+2]) {
      return [i,i+1,i+2];
    }
  }

  //revision de ganador de manera vertical
  for(let i = 0; i <= 3; i++) {
    if(tablero[i] && tablero[i] === tablero[i+3] && tablero[i] === tablero[i+6]) {
      return [i,i+3,i+6];
    }
  }

  //revision de ganador de manera diagonal
  if(tablero[0] && tablero[0] === tablero[4] && tablero[0] === tablero[8]) {
      return [0,4,8];
  }

    if(tablero[2] && tablero[2] === tablero[4] && tablero[2] === tablero[6]) {
      return [2,4,6];
  }

  if(tablero.includes("")) return false;
  return "EMPATE";


 }

 function ganar(posicionGanadora){
  posicionGanadora.forEach(posicion => {
    botones[posicion].classList.toggle("ganador",true);
  })

  mostrarModal("GANO :"+juego)
  juego= "PAUSA";

 }

 function mostrarModal( texto ){
  textoModal.innerText = texto;
  modal.showModal();
 }

 modal.querySelector("button").addEventListener("click", () => {
  botones.forEach(boton => {
    boton.textContent = "";
    boton.classList.toggle("ganador", false);
    modal.close();
   juego = "jugador 1";  
  });
 });
