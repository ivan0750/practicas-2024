import { describe, it, expect } from "vitest";

describe("Estructuras de control", () => {
  //Utilizar un IF para que "y" tome el valor 10 solo si x es verdadera
  it("IF", () => {
    let x;
    let y;
    if(x=true){
      y=10;
      console.x("la condicion es verdadera");
    }
    expect(y).toBe(10);
  });

  //Utilizar un IF para que "y" tome el valor 10 o 20 dependiendo de si "x" es verdadera o falsa
  it("IF ELSE", () => {
    let x;
    let y;
    if(x=true){
      y=10;
      console.x("la condicion es verdadera");
    }else {
      y=20;
      console.x("la condicion es falsa");
    }

    expect(z).toBe(10);
  });

  //Utilizar un WHILE para que aumente el valor de "y" y disminuya el valor de "x", mientras "x" no sea 0
  it("WHILE", () => {
    let x;
    let y;
    x=10;
    y=1;
    while(y<=x){
      console.log(x);
      x--;
      y++;
    }

    expect(y).toBe(10);
  });

  //Utilizar un FOR para que aumente el valor de "y" una cantidad de veces igual a "x"
  it("FOR", () => {
    let x;
    let y;
    x=10;
    for(y=1; y<=x; y++){
      console.log(y);
    }

    expect(y).toBe(10);
  });

  // Utilizar un Switch para que dependiendo del valor que tenga "x"(del 1 al 7), se setee a la variable "y" como un dia de la semana (Lunes,Martes,etc)
  it("SWITCH", () => {
    let x;
    let y;
    y=1;
    switch(x){
      case 1:
        console.log("lunes");
        break;
      case 2: 
      console.log("martes");
      break;
      case 3:
        console.log("miercoles");
        break;
      case 4:
        console.log("jueves");
        break;
      case 5:
        console.log("viernes");
        break;
      case 6:
        console.log("sabado");
        break;
      case 7:
        console.log("domingo");
        break;
      default:
        console.log("default");
    }

    expect(y).toBe("Lunes");
  });
});
