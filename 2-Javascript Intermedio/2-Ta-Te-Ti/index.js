const readline = require("readline/promises").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const matriz = () => {

    let arr1 =["","",""];
    let arr2 =["","",""];
    let arr3 =["","",""];
    let matrix =[arr1,arr2,arr3];
    return matrix;
}
    //verifica si alguien gano
const gano = (tablero,word) =>{
    if((tablero [0][0] === word) && (tablero [1][1] === word ) && (tablero [2][2] === word)) return "gano";
    if((tablero [0][2] === word) && (tablero [1][1] === word ) && (tablero [2][0] === word)) return "gano";

    for(y=0 ; y<=2 ; y++){

        if((tablero [y][0] === word ) && (tablero [y][1] === word )&&(tablero [y] [2] === word)) return "gano";
        if((tablero [0][y] === word ) && (tablero [1][y] === word )&&(tablero [2] [y] === word)) return "gano";
    
    }
    return "no gano";
  }

  const continua = (tablero,x,y) => { 
    if( 2<x>0 || 2<y>0 ) return true;     
    if(tablero[y][x]=="") return false;
    else return true;
  }
  
  const jugar = async() => {
    let tablero=matriz();
    let x,y; //posiciones en el tablero
    let jugador; //jugador 1 o 2
    let letra;
    let z=1; //turno
    let ganador = true; //gano?
    let continuar=true; //continua preguntando la posicion del tablero?

    console.table( tablero );
    
    while((z<=9) && ( ganador===true ) )
    {
      continuar=true;
      if( z%2 == 0 ) {
        letra="x";
        jugador=1;
      }
      else {
        letra="o";
        jugador=2;
      }

      console.log(`Turno ${z}`);
      console.log(`Jugador ${jugador}`);  
    
      while(continuar === true) {
        x=await readline.question("Seleccione la columna en la que desea jugar su turno:" );
        y=await readline.question("Seleccione en que fila desea jugar su turno:" );
        continuar=continua(tablero,x,y);
        
        if(continuar===true) {
          console.clear();
          console.table( tablero );
          console.error("Se selcciono una casilla ya ocupada o se selcciono una casilla que supere la matriz 3x3");
          console.error("Vuelva a seleccionar una casilla que se encuentre en la matriz 3x3 y que no se halle ocupada");
          console.log( `Turno ${z}` );
          console.log( `Jugador ${jugador}` ); 
        }
      }

      tablero[y][x] = letra; //guarda la posicion
      readline.pause();
      console.table( tablero );
    
      if((gano(tablero,letra))==="gano") {
        console.log(`Felicidades jugador ${jugador} ,ganaste la partida`);
        ganador=false;
      }
      else if( z==9 ) console.log("El juego quedo en empate") ;
      z++;
    }
  }

  jugar();