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
      formulario["resultado"].value = valormovilidad * 0.095;
      if(type[1].checked)
      {
        formulario["resultado"].value = valormovilidad * 0.095 * 2;
      }
    }

  }

  //FUNCION PARA CALCULAR MOVILDAD EN TERRESTRE

  function calcularmovilidadterrestre(){
    formulario = document.forms["movilidad"];
    var valormovilidad2 = Number(formulario["terrestrerecorrido"].value);
    var type2 = document.getElementsByName("comeback2");
    if (type2[0].checked)
    {
      formulario["resultadoterrestre"].value = valormovilidad2 * 2.34 * 0.05;
      if(type2[1].checked)
      {
        formulario["resultadoterrestre"].value = valormovilidad2 * 2.34 * 0.05 * 2;
      }
    }  
    if (type2[1].checked)
    {
      formulario["resultadoterrestre"].value = valormovilidad2 * 2.70 * 0.05;
      if(type2[1].checked)
      {
        formulario["resultadoterrestre"].value = valormovilidad2* 2.70 * 0.05 * 2;
      }
    }  
    if (type2[2].checked)
    {
      formulario["resultadoterrestre"].value = valormovilidad2 * 0.2346 * 0.34;
      if(type2[1].checked)
      {
        formulario["resultadoterrestre"].value = valormovilidad2 * 0.2346 * 0.34 * 2;
      }
    }
    if (type2[3].checked)
    {
      formulario["resultadoterrestre"].value = valormovilidad2 * 2.539 * 0.0112;
      if(type2[1].checked)
      {
        formulario["resultadoterrestre"].value = valormovilidad2 * 2.539 * 0.0112 * 2;
      }
    } 
    if (type2[4].checked)
    {
      formulario["resultadoterrestre"].value = valormovilidad2 * 0.024 * 0.023;
      if(type2[1].checked)
      {
        formulario["resultadoterrestre"].value = valormovilidad2 * 0.024 * 0.023 * 2;
      } 
    } 
    if (type2[5].checked)
    {
      formulario["resultadoterrestre"].value = valormovilidad2 * 0.024 * 0.023;
      if(type2[1].checked)
      {
        formulario["resultadoterrestre"].value = valormovilidad2 * 0.024 * 0.023 * 2;
      } 
    } 
    if (type2[6].checked)
    {
      formulario["resultadoterrestre"].value = valormovilidad2 * 2.34 * 0.05;
      if(type2[1].checked)
      {
        formulario["resultadoterrestre"].value = valormovilidad2 * 2.34 * 0.05 * 2;
      } 
    } 
  }
