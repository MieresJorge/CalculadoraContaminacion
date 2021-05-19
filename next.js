var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/siguiente buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("siguienteBtn").innerHTML = "Calcular";
  } else {
    document.getElementById("siguienteBtn").innerHTML = "siguiente";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function siguientePrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);


}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });



  //FUNCION PARA CALCULAR AGUA PERRO!
  function calcularagua() {
    formulario = document.forms["water"];
    var valoragua = Number(formulario["aguaMensual"].value);
    formulario["resultado"].value = valoragua + 5;
  }

  //FUNCCION PARA CALCULAR MOVILIDAD EN AVION
  function calcularmovilidad() {
    formulario = document.forms["movilidad"];
    var valormovilidad = Number(formulario["kmrecorridos"].value);
    var type = document.getElementsByName("comeback1");
    if (formulario["kmrecorridos"].value < 500)
    {
      formulario["resultado"].value = valormovilidad * 0.155;
      if(type[1].checked)
      {
        formulario["resultado"].value = valormovilidad * 0.155 * 2;
      }
    }
    else 
    {
      formulario["resultado"].value = valormovilidad * 0.11;
      if(type[1].checked)
      {
        formulario["resultado"].value = valormovilidad * 0.11 * 2;
      }
    }
    if (formulario["kmrecorridos"].value >= 3000)
    {
      formulario["resultado"].value.toFixed(2)= valormovilidad * 0.095;
      if(type[1].checked)
      {
        formulario["resultado"].value.toFixed(2) = valormovilidad * 0.095 * 2;
      }
    }

  }

  //FUNCION PARA CALCULAR MOVILDAD EN TERRESTRE

  function calcularmovilidadterrestre(){
    formulario = document.forms["movilidad"];
    var valormovilidad2 = Number(formulario["terrestrerecorrido"].value);
    var type2 = document.getElementsByName("comeback2");
    var typefuell = document.getElementsByName("comeback4");
    var terrestre;
    if (type2[0].checked)
    {
      terrestre = valormovilidad2 * 2.34 * 0.05;
      document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      document.getElementById("consejostransporte").innerHTML = "Se recomienda usar un transporte mas ecologico como tren,autobus o vehiculo a gas/electrico"
      if(type2[1].checked)
      {
        terrestre = valormovilidad2 * 2.34 * 0.05 * 2;
        document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      }
    }  
    if (type2[1].checked)
    {
      terrestre = valormovilidad2 * 2.70 * 0.05;
      document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2)
      document.getElementById("consejostransporte").innerHTML = "Se recomienda usar un transporte mas ecologico como tren,autobus o vehiculo a gas/electrico";
      if(type2[1].checked)
      {
        document.getElementById("resultadoterrestre").innerHTML = valormovilidad2 * 2.70 * 0.05 * 2;
      }
    }  
    if (type2[2].checked)
    {
      terrestre = valormovilidad2 * 0.2346 * 0.34;
      document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      document.getElementById("consejostransporte").innerHTML = "Si usa Furgoneta se recomienda viaje compartido para contaminar menos";
      if(type2[1].checked)
      {
        terrestre = valormovilidad2 * 0.2346 * 0.34 * 2;;
        document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      }
    }
    if (type2[3].checked)
    {
      terrestre = valormovilidad2 * 2.539 * 0.0112;
      document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      document.getElementById("consejostransporte").innerHTML = "Sigue usando el autobus :)";
      if(type2[1].checked)
      {
        terrestre = valormovilidad2 * 2.539 * 0.0112 * 2;
        document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      }
    } 
    if (type2[4].checked)
    {
      terrestre = valormovilidad2 * 0.024 * 0.023;
      document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      document.getElementById("consejostransporte").innerHTML = "Sigue usando el tren :)";
      if(type2[1].checked)
      {
        terrestre = valormovilidad2 * 0.024 * 0.023 * 2;;
        document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      } 
    } 
    if (type2[5].checked)
    {
      terrestre = valormovilidad2 * 0.024 * 0.023;
      document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      document.getElementById("consejostransporte").innerHTML = "Sigue usando el tren :)";
      if(type2[1].checked)
      {
        terrestre = valormovilidad2 * 0.024 * 0.023 * 2;
        document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2); 
      } 
    } 
    if (type2[6].checked)
    {
      terrestre = valormovilidad2 * 2.34 * 0.05;
      document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      document.getElementById("consejostransporte").innerHTML = "Si su vehiculo utiliza combustibles como gasolina o diesel se recomienda usar el transporte publico o un combustible mas amigable con el ambiente como el gas :)";
      if(type2[1].checked)
      {
        terrestre = valormovilidad2 * 2.34 * 0.05 * 2;
        document.getElementById("resultadoterrestre").innerHTML = terrestre.toFixed(2);
      } 
    }
    //funcion para consejos con tipo de combustible
    if (typefuell[0].checked)
    {
      document.getElementById("consejosTipoTransporte").innerHTML = "Usar otra alternativa de combustible mas ecologica como Gas o Electrica";
    }
    if (typefuell[1].checked)
    {
      document.getElementById("consejosTipoTransporte").innerHTML = "Usar otra alternativa de combustible mas ecologica como Gas o Electrica";
    }
    if (typefuell[2].checked)
    {
      document.getElementById("consejosTipoTransporte").innerHTML = "";
    }
    if (typefuell[4].checked)
    {
      document.getElementById("consejosTipoTransporte").innerHTML = "";
    }
  }

  function cambiar(){
    formularioo = document.forms["movilidad"];
    formularioo["perro"].style = "display: block;animation:zoomIn; animation-duration: 2s;";

  }

  function cambiartotal(){
    formularioo = document.forms["movilidad"];
      formularioo["perros"].style = "display: block;animation:zoomIn; animation-duration: 2s;";
    if (formulario["perro"].style = "display: block;animation:zoomIn; animation-duration: 2s;")
    {
      formulario["perro"].style = "display: none"
    }
  }

  document.getElementsByName("perra").value = "AEREO"


  //FUNCION PARA CALCULAR ALIMENTACION Y CONSEJOS PERRI//
  
  function calcularalimenacion(){
    formulario = document.forms["alimentacioon"];
    var compraecologica = document.getElementsByName("group3");
    var tipoAlimentacion = document.getElementsByName("group01");
    var morfi; 
    if(tipoAlimentacion[0].checked)
    {
      document.getElementById("resultadoAlimentacion").innerHTML = "196.85";
    }
    if(tipoAlimentacion[1].checked)
    {
      document.getElementById("resultadoAlimentacion").innerHTML = "171.79";
    }
    if(tipoAlimentacion[2].checked)
    {
      document.getElementById("resultadoAlimentacion").innerHTML = "303.01";
    }
    if(tipoAlimentacion[3].checked)
    {
      document.getElementById("resultadoAlimentacion").innerHTML = "392.07";
    }
    if(tipoAlimentacion[4].checked)
    {
      document.getElementById("resultadoAlimentacion").innerHTML = "303.01";
    }

    /* CONSEJOS POR SI COMPRA COMIDA LOCALMENTE -320KM PA*/
    if(compraecologica[0].checked)
    {
      document.getElementById("consejoCompraEcologica").innerHTML = "";
    }
    if(compraecologica[1].checked)
    {
      document.getElementById("consejoCompraEcologica").innerHTML = "Mientras mas comida producida localmente consumas menos huella produces";
    }
    if(compraecologica[2].checked)
    {
      document.getElementById("consejoCompraEcologica").innerHTML = "Se recomienda buscar lugares donde se produzca comida localmente";
    }
  }

  function consejoComidaEcologica(){
    formulario = document.forms["alimentacioon"];
    var comidaEcologica = document.getElementsByName("group2");
    if(comidaEcologica[0].checked)
    {
      document.getElementById("consejoComidaEcologica").innerHTML = ""
    }
    if(comidaEcologica[1].checked)
    {
      document.getElementById("consejoComidaEcologica").innerHTML = ""
    }
    if(comidaEcologica[2].checked)
    {
      document.getElementById("consejoComidaEcologica").innerHTML = "Se recomienda comprar mas comida ecologica"
      document.getElementById("consejillos").style = "display:block"
    }
  }

  /* CALCULO PARA RESIDUOS */
function calculoresiduos(){
  formulario = document.forms["residuos"];
  var reciclaje = document.getElementsByName("reciclaje01");
  var reciclajeVerde = document.getElementsByName("reciclaje02");
  var reciclajeMarron = document.getElementsByName("reciclaje03");
  var reciclajeResiduos = document.getElementsByName("reciclaje04");
  var ConsejosRopa = document.getElementsByName("consejos01");
  var cantidadkg = 450;

  if (reciclaje[0].checked || reciclaje[1].checked)
  {
    cantidadkg = cantidadkg - 91.35;
    var emisiones = cantidadkg * 0.177;
    var total = emisiones + 1.46;
    document.getElementById("resultadoResiduo").innerHTML = total;
      if(reciclajeVerde[0].checked || reciclajeVerde[1].checked)
      {
        cantidadkg = cantidadkg - 0.45;
        emisiones = cantidadkg * 0.177;
        total =emisiones + 0.0036;
        document.getElementById("resultadoResiduo").innerHTML = total.toFixed(2);
      }
      if(reciclajeMarron [0].checked || reciclajeMarron[1].checked)
      {
        cantidadkg = cantidadkg - 91.35;
        emisiones = cantidadkg * 0.177;
        total =emisiones + 0.24;
        document.getElementById("resultadoResiduo").innerHTML = total.toFixed(2);
      }
      if(reciclajeResiduos [0].checked || reciclajeResiduos[1].checked)
      {
        cantidadkg = cantidadkg - 193.5;
        emisiones = cantidadkg * 0.177;
        total =emisiones + 0.89;
        document.getElementById("resultadoResiduo").innerHTML = total.toFixed(2);
      }
  }
    /*CONSEJOS PADRE */
    if(ConsejosRopa[4].checked || ConsejosRopa[3].checked )
      {
        document.getElementById("ConsejosRopa").innerHTML = "Te recomendamos donar la ropa que ya no usas";
        document.getElementById("consejillos").style = "display:block"
      }
}

    /* FUNCION PARA CALCULAR CONSUMO */
    function consumoTotal(){
      formulario = document.forms["consumo"];
      var totalRopa = Number(formulario["gastoRopa"].value);
      var totalTabaco = Number(formulario["consumoTabaco"].value);
      var totalBolsas = Number(formulario["bolsas"].value);
      var totalbotellas = Number(formulario["botellitas"].value);
      var totalLibros = Number(formulario["libritos"].value);
      var tipobolsass = document.getElementsByName("grupobolsas");
      var tabaco;
      var bolsass;
      var botellas;
      var ropita;
      var ropaSegundaMano = document.getElementsByName("ropasegundamano");
      if (ropaSegundaMano[1].checked)
      {
        ropita = totalRopa * 0.31 * 0.25;
        document.getElementById("totalRopaa").innerHTML ="Total por ropa: " + ropita.toFixed(2);
      }
      if (ropaSegundaMano[2].checked)
      {
        ropita = totalRopa * 0.31 * 0.5;
        document.getElementById("totalRopaa").innerHTML = "Total por ropa: " + ropita.toFixed(2);
      }
      if (ropaSegundaMano[3].checked)
      {
        ropita = totalRopa * 0.31 * 0.9;
        document.getElementById("totalRopaa").innerHTML ="Total por ropa: " + ropita.toFixed(2);
      }
      if (ropaSegundaMano[4].checked)
      {
        ropita = totalRopa * 0.31;
        document.getElementById("totalRopaa").innerHTML = "Total por ropa: " + ropita.toFixed(2);
      }

      //CALCULO DE CONSUMO DE TABACO
      tabaco = totalTabaco * 1.131;
      document.getElementById("totalTabacoo").innerHTML = "Total emision por tabaco: " + tabaco.toFixed(2);
      //CALCULO DE CONSUMO POR BOLSAS :d
      if(tipobolsass[0].checked)
      {
        bolsass = totalBolsas * 0.1183
        document.getElementById("totalBolsaas").innerHTML ="Total emision por Bolsas: " +  bolsass.toFixed(2);
        document.getElementById("consejitos").style = "display:block"
        document.getElementById("ConsejoBolsasEcologicas").innerHTML = "Se recomienda usar bolsas de algodon"
      }
      if(tipobolsass[1].checked)
      {
        bolsass = totalBolsas * 0.02
        document.getElementById("totalBolsaas").innerHTML ="Total emision por Bolsas: " +  bolsass.toFixed(2);
      }
      if(tipobolsass[2].checked)
      {
        bolsass = totalBolsas * 3.98
        document.getElementById("totalBolsaas").innerHTML ="Total emision por Bolsas: " +  bolsass.toFixed(2);
      }

      //CALCULO POR BOTELLAS PERRI
      botellas = totalbotellas * 0.447;
      document.getElementById("totalBebidas").innerHTML ="Total emision por botellas: " + botellas.toFixed(2);

      //Calculo PARA LIBROS :D
      var libross;
      libross = totalLibros * 1.2;
      document.getElementById("totalLibros").innerHTML ="Total emision por Libros: " + libross.toFixed(2);
      //TOTAL DEL TOTAL 
      totalDeConsumo = libross + botellas + bolsass + tabaco + ropita
     document.getElementById("totalTotal").innerHTML ="Emisiones Totales: " + totalDeConsumo.toFixed(2)
    }
  
    //FUNCION PARA CALCULAR CANTIDAD DE ENERGIA
    function calcularEnergia(){
      formulario = document.forms["energia"];
      var totalElectricidadMes = Number(formulario["consumoElectricidad"].value);
      var totalEnergiaLimpia = Number(formulario["electricidadLimpia"].value);
      var tipoCalefaccion = document.getElementsByName("tipoCalefacion");
      var emisionEnergia;
      if(tipoCalefaccion[0].checked)
      {
        emisionEnergia = totalElectricidadMes * 0.31;
        var total = totalElectricidadMes * 1.91 + totalElectricidadMes;
        var total2 = total - (total*totalEnergiaLimpia/100)
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2);
      }
      if(tipoCalefaccion[1].checked)
      {
        emisionEnergia = totalElectricidadMes * 0.31;
        var total = totalElectricidadMes * 1.91 + totalElectricidadMes;
        var total2 = total - (total*totalEnergiaLimpia/100)
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2);
      }
      if(tipoCalefaccion[2].checked)
      {
        emisionEnergia = totalElectricidadMes * 0.31;
        var total = totalElectricidadMes * 0.182 + totalElectricidadMes;
        var total2 = total - (total*totalEnergiaLimpia/100)
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2);
      }
      if(tipoCalefaccion[3].checked)
      {
        emisionEnergia = totalElectricidadMes * 0.31;
        var total = totalElectricidadMes * 2.86 + totalElectricidadMes;
        var total2 = total - (total*totalEnergiaLimpia/100);
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2);
      }
      if(tipoCalefaccion[4].checked)
      {
        emisionEnergia = totalElectricidadMes * 0.31;
        var total = totalElectricidadMes * 3.127 + totalElectricidadMes;
        var total2 = total - (total*totalEnergiaLimpia/100);
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2);
      }
      if(tipoCalefaccion[5].checked)
      {
        emisionEnergia = totalElectricidadMes * 0.31;
        var total = totalElectricidadMes * 1.91 + totalElectricidadMes;
        var total2 = total - (total*totalEnergiaLimpia/100);
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2);
      }
      if(tipoCalefaccion[6].checked)
      {
        total = totalElectricidadMes * 0.31;
        var total2 = total - (total*totalEnergiaLimpia/100)
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2) ;
      }
      if(tipoCalefaccion[7].checked)
      {
        total = totalElectricidadMes * 0.31;
        var total2 = total- (total*totalEnergiaLimpia/100)
        document.getElementById("resultadoElectro").innerHTML = total2.toFixed(2);
      }
      //CONSEJO AIRE ACONDICIONADO 
      var aireAcondicionado = document.getElementsByName("grupoAire");
      if(aireAcondicionado[0].checked)
      {
        document.getElementById("consejoAire").innerHTML = "Se recomienda usar split"
      }
      //OTRO CONSEJOS AIRE ACONDICIONADO
      var aireAcondicionado = document.getElementsByName("grupoTemperaturaAire");
      if(aireAcondicionado[0].checked)
      {
        document.getElementById("consejoAire2").innerHTML = "Se recomienda usar el aire acondicionado en 24° de dia 24° o 21° de noche"
      }
      if(aireAcondicionado[1].checked)
      {
        document.getElementById("consejoAire2").innerHTML = "Se recomienda usar el aire acondicionado en 24° de dia 24° o 21° de noche"
      }
      if(aireAcondicionado[2].checked)
      {
        document.getElementById("consejoAire2").innerHTML = "Se recomienda usar el aire acondicionado en 24° de dia 24° o 21° de noche"
      }
      //CONSEJOS POR APARATOS ELECTRICOS
      var aireAcondicionado = document.getElementsByName("consejosAparatos");
      if(aireAcondicionado[0].checked)
      {
        document.getElementById("consejosAparatos").innerHTML = "Se recomienda usar split"
      }
      var aireAcondicionado = document.getElementsByName("consejosAparatos");
      if(aireAcondicionado[1].checked)
      {
        document.getElementById("consejosAparatos").innerHTML = "Se recomienda desconectar aparatos electricos al no usarlos"
      }
      var aireAcondicionado = document.getElementsByName("consejosAparatos");
      if(aireAcondicionado[2].checked)
      {
        document.getElementById("consejosAparatos").innerHTML = "Se recomienda desconectar aparatos electricos al no usarlos"
      }
      var aireAcondicionado = document.getElementsByName("consejosAparatos");
      if(aireAcondicionado[3].checked)
      {
        document.getElementById("consejosAparatos").innerHTML = "Se recomienda desconectar aparatos electricos al no usarlos"
      }
      var aireAcondicionado = document.getElementsByName("consejosAparatos");
      if(aireAcondicionado[4].checked)
      {
        document.getElementById("consejosAparatos").innerHTML = "Se recomienda desconectar aparatos electricos al no usarlos"
      }
      if(aireAcondicionado[5].checked)
      {
        document.getElementById("consejosAparatos").innerHTML = "Se recomienda desconectar aparatos electricos al no usarlos"
      }
      if(aireAcondicionado[6].checked)
      {
        document.getElementById("consejosAparatos").innerHTML = "Se recomienda desconectar aparatos electricos al no usarlos"
      }
      //CONSEJOS LUCES LED
      var aireAcondicionado = document.getElementsByName("grupoLucesLed");
      if(aireAcondicionado[0].checked)
      {
        document.getElementById("consejosLucesLeD").innerHTML = ""
      }
      if(aireAcondicionado[1].checked)
      {
        document.getElementById("consejosLucesLeD").innerHTML = "Intenta completar todas las luces led que te faltan"
      }
      if(aireAcondicionado[2].checked)
      {
        document.getElementById("consejosLucesLeD").innerHTML = "Intenta instalar muchas mas luces led"
      }
      if(aireAcondicionado[3].checked)
      {
        document.getElementById("consejosLucesLeD").innerHTML = "Intenta instalar muchas mas luces led"
      }
      if(aireAcondicionado[2].checked)
      {
        document.getElementById("consejosLucesLeD").innerHTML = "Considera instalar la mayor cantidad de luces led posibles"
      }
      //electrodomesticos consejos utilizacion
      var aireAcondicionado = document.getElementsByName("grupoElectrodomesticosUtilizados");
      if(aireAcondicionado[0].checked)
      {
        document.getElementById("consejosUtilizacion").innerHTML = "Se recomienda usar electrodomesticos por las noches"
      }
      if(aireAcondicionado[1].checked)
      {
        document.getElementById("consejosUtilizacion").innerHTML = "Se recomienda reducir el uso de sus electrodomesticos"
      }
      if(aireAcondicionado[2].checked)
      {
        document.getElementById("consejosUtilizacion").innerHTML = "Se recomienda reducir mucho mas el tiempo de utilizacion de sus electrodomesticos"
      }
      //CONSEJOS USO ELECTROMECANICA
      var aireAcondicionado = document.getElementsByName("grupoElectronicaEncendida");
      if(aireAcondicionado[0].checked)
      {
        document.getElementById("consejosTiempoUtilizacion").innerHTML = ""
      }
      if(aireAcondicionado[1].checked)
      {
        document.getElementById("consejosTiempoUtilizacion").innerHTML = "Se recomienda apagarlos por las noches"
      }
    }

    //nothin to doas



    //Nueva Funcion KW_MENSUALES: :D

    function kwMensuales(){
      formulario = document.forms["kwMensuales"];
      var totalEnero = Number(formulario["ENERO"].value);
      var totalFebrero = Number(formulario["Febrero"].value);
      var totalMarzo = Number(formulario["Marzo"].value);
      /*var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);
      var totalEnero = Number(formulario["ENERO"].value);*/
      document.getElementById("resultado").innerHTML = "Se recomienda apagarlos por las noches"
    }

    function calcularkwhats() {
      formulario = document.forms["kwmensuales"];
      var valorEnero = Number(formulario["enero"].value);
      var valorFebrero = Number(formulario["febrero"].value);
      var valorMarzo = Number(formulario["marzo"].value);
      var valorAbril = Number(formulario["abril"].value);
      var valorMayo = Number(formulario["mayo"].value);
      var valorJunio = Number(formulario["junio"].value);
      var valorJulio = Number(formulario["julio"].value);
      var valorAgosto = Number(formulario["agosto"].value);
      var valorSeptiembre = Number(formulario["septiembre"].value);
      var valorOctubre = Number(formulario["octubre"].value);
      var valorNoviembre = Number(formulario["noviembre"].value);
      var valorDiciembre = Number(formulario["diciembre"].value);
      var type = document.getElementsByName("comeback1");

      //calculo de enero
      var mensualEnero = valorEnero * 0.1
      var costeEnero = valorEnero * 0.11
      var diferenciaEnero = costeEnero - mensualEnero
      //calculo de febrero
      var mensualFebrero = valorFebrero * 0.096
      var costeFebrero = valorFebrero * 0.11
      var diferenciaFebrero = costeFebrero - mensualFebrero
      //calculo de marzo
      var mensualMarzo = valorMarzo * 0.087
      var costeMarzo = valorMarzo * 0.11
      var diferenciaMarzo = costeMarzo - mensualMarzo
      //calculo de Abril
      var mensualAbril = valorAbril * 0.078
      var costeAbril = valorAbril * 0.11
      var diferenciaAbril = costeAbril - mensualAbril
      //calculo de Mayo
      var mensualMayo = valorMayo * 0.08
      var costeMayo = valorMayo * 0.11
      var diferenciaMayo = costeMayo - mensualMayo
      //calculo de Junio
      var mensualJunio = valorJunio * 0.089
      var costeJunio = valorJunio * 0.11
      var diferenciaJunio = costeJunio - mensualJunio
      //calculo de Julio
      var mensualJulio = valorJulio * 0.092
      var costeJulio = valorJulio * 0.11
      var diferenciaJulio = costeJulio - mensualJulio
      //calculo de Agosto
      var mensualAgosto = valorAgosto * 0.095
      var costeAgosto = valorAgosto * 0.11
      var diferenciaAgosto = costeAgosto - mensualAgosto
      //calculo de Septiembre
      var mensualSeptiembre = valorSeptiembre * 0.08
      var costeSeptiembre = valorSeptiembre * 0.11
      var diferenciaSeptiembre = costeSeptiembre - mensualSeptiembre
      //calculo de Octubre
      var mensualOctubre = valorOctubre * 0.089
      var costeOctubre = valorOctubre * 0.11
      var diferenciaOctubre = costeOctubre - mensualOctubre
      //calculo de Noviembre
      var mensualNoviembre = valorNoviembre * 0.092
      var costeNoviembre = valorNoviembre * 0.11
      var diferenciaNoviembre = costeNoviembre - mensualNoviembre
      //calculo de Diciembre
      var mensualDiciembre = valorDiciembre * 0.095
      var costeDiciembre = valorDiciembre * 0.11
      var diferenciaDiciembre = costeDiciembre - mensualDiciembre
      
      var totalAnual = mensualEnero + mensualFebrero + mensualMarzo + mensualAbril + mensualMayo + mensualJunio + mensualJulio + mensualAgosto +mensualSeptiembre+ mensualNoviembre + mensualDiciembre;
      var totalCosteMensual = costeEnero + costeFebrero + costeMarzo + costeAbril + costeMayo + costeJunio + costeJulio + costeAgosto + costeSeptiembre + costeNoviembre + costeDiciembre;
      var totalDiferenciaCostos =  totalCosteMensual - totalAnual;         
      formulario["resultado"].value = "diferencia es: $" + totalDiferenciaCostos.toFixed(2);
  
    }