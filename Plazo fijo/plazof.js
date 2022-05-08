let boton = document.getElementById("btnCalcular");
  boton.addEventListener("click", validarFormulario);
  
  function validarFormulario() {
    let name = document.getElementById("name").value;
    let montoIngresado = parseInt(document.getElementById("monto").value);
    let montoVacioBandera = document.getElementById("monto");
    let dias = parseInt(document.getElementById("dias").value);
    let diasVacioBandera = document.getElementById("dias");
    mensajeError = document.getElementById("error");
    let bandera = true;
    if(name.trim() === "") {
      mensajeError.innerHTML ='<br>'+ "Su nombre y su apellido son datos requeridos";
      bandera = false;
      
    }  
    else if(montoIngresado <= 999 || montoIngresado === 0 || montoVacioBandera.value.trim() === ""){
      mensajeError.innerHTML = '<br>' + "El monto ingresado no es válido";
      bandera = false;
    }
    else if(dias <= 29 || diasVacioBandera.value.trim() === "") {
      mensajeError.innerHTML ='<br>'+ "Debe ingresar, como mínimo, 30 dias";
      bandera = false;
    }
    

    if(bandera === true){
      mensajeError.innerHTML = "";
      calcularMonto(montoIngresado,name,dias);
    }
  }
  function calcularPorcentaje(dias){
    let pPorcentaje;
    if(dias<=60){
      pPorcentaje = 40;
    }
    else if(dias>60 || dias<121){
      pPorcentaje = 45;
    }
    else if(dias>120 || dias<361){
      pPorcentaje = 50;
    }
    else if(dias > 359){
      pPorcentaje = 65;
    }
    return pPorcentaje;
  }
  function calcularMonto(montoIngresado,name, dias){
    let porcentaje = calcularPorcentaje(dias);
    let montoFinal = montoIngresado+(montoIngresado* (dias/360)*(porcentaje/100));
    let mostrarMonto = document.getElementById("mostrarMontoFinal");
    mostrarMonto.innerHTML = name + '<br>';  
    mostrarMonto.innerHTML += "Monto a recibir: "+ montoFinal.toFixed(2) +'<br>' ;
    let btnReinvertir = document.createElement("button");
    mostrarMontoFinal.appendChild(btnReinvertir);
    btnReinvertir.id = "btnReinvertir";
    btnReinvertir.innerHTML ="Reinvertir";
    btnReinvertir.type= "submit";
    btnReinvertir.onclick = reinvertir(montoIngresado, montoFinal, dias, porcentaje);
  }
  
  function reinvertir(montoIngresado, montoFinal, dias, porcentaje){
    let mostrarReinvertir = document.getElementById("mostrarReinvertir");
    let mostrar = document.getElementById("grid-1");
    mostrar.innerHTML = "Periodo";

    mostrar= document.getElementById("grid-2");
    mostrar.innerHTML = "Monto Inicial";

    mostrar = document.getElementById("grid-3");
    mostrar.innerHTML = "Monto  Final";

    mostrar = document.getElementById("grid-4");
    mostrar.innerHTML = "1";

    mostrar = document.getElementById("grid-5");
    mostrar.innerHTML = montoIngresado.toFixed(2);

    mostrar = document.getElementById("grid-6");
    mostrar.innerHTML = montoFinal.toFixed(2);
    
    mostrar = document.getElementById("grid-7");
    mostrar.innerHTML = "2";

    mostrar = document.getElementById("grid-8");
    montoIngresado = montoFinal;
    mostrar.innerHTML = montoIngresado.toFixed(2);

    mostrar = document.getElementById("grid-9");
    montoFinal = montoIngresado+(montoIngresado* (dias/360)*(porcentaje/100));
    mostrar.innerHTML = montoFinal.toFixed(2);
    montoIngresado = montoFinal;

    mostrar = document.getElementById("grid-10");
    mostrar.innerHTML = "3";

    mostrar = document.getElementById("grid-11");
    mostrar.innerHTML = montoIngresado.toFixed(2);
    
    mostrar = document.getElementById("grid-12");
    montoFinal = montoIngresado+(montoIngresado* (dias/360)*(porcentaje/100));
    mostrar.innerHTML = montoFinal.toFixed(2);
    montoIngresado = montoFinal;

    mostrar = document.getElementById("grid-13");
    mostrar.innerHTML = "4";

    mostrar = document.getElementById("grid-14");
    mostrar.innerHTML = montoIngresado.toFixed(2);
    
    mostrar = document.getElementById("grid-15");
    montoFinal = montoIngresado+(montoIngresado* (dias/360)*(porcentaje/100));
    mostrar.innerHTML = montoFinal.toFixed(2);
     
  }