
window.addEventListener('load', function(){


	
	var formulario   = document.querySelector('#formulario');
	var error_nombre    = document.querySelector('#error_nombre');
	var error_apellidos = document.querySelector('#error_apellidos');
    var error_edad      = document.querySelector('#error_edad');
    var error_rut       = document.querySelector('#error_rut')
    var error_email     = document.querySelector('#error_email')
    var error_fecha     = document.querySelector('#error_fecha')
    
	error_nombre.style.display 	  = 'none';
	error_apellidos.style.display = 'none';
    error_rut.style.display      = 'none';
    error_email.style.display      = 'none';
    error_fecha.style.display      = 'none';
    error_edad.style.display  = 'none';

	formulario.addEventListener('submit', function(event){
	  var nombre 	= document.querySelector('#nombre').value;
	  var apellidos = document.querySelector('#apellidos').value;
      var edad 		= document.querySelector('#edad').value;
      var rut       = document.querySelector('#rut').value;
      var email     = document.querySelector('#email').value;
      var fecha     = document.querySelector('#fecha').value;
     var especialidad = document.querySelector('#especialidad')
     var hora = document.querySelector('#hora')
        
      const patrones = {
        letras : /\D/gim,
         numeros : /\d/gim,
         rut : /^[0-9]+[-|‐]{1}[0-9 kK]{1}$/,
        correo : /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    fecha: /^(0[1-9]|1\d|2\d|3[01])\-(0[1-9]|1[0-2])\-(19|20)\d{2}$/}
        
        if(!rut.match(patrones.rut)){
            alert('El rut no es valido');
            error_rut.innerHTML ='El rut no es valido';
            error_rut.style.display = 'block';
            return false;
        }else{
            error_rut.style.display 	  = 'none';
        }

	  if(!nombre.match(patrones.letras)){
	  	alert('El nombre no es valido');
	  	error_nombre.innerHTML ='El nombre no es valido';
	  	error_nombre.style.display = 'block';
	  	return false;
	  }else{
	  	error_nombre.style.display 	  = 'none';
      }
      if(!apellidos.match(patrones.letras)){
        alert('El nombre no es valido');
        error_apellidos.innerHTML ='El nombre no es valido';
        error_apellidos.style.display = 'block';
        return false;
    }else{
        error_apellidos.style.display 	  = 'none';
    }

	  if(edad == null || edad <= 0 || isNaN(edad)){
	  	alert('La edad no es valida');
	  	error_edad.innerHTML ='La edad no es valida';
	  	error_edad.style.display      = 'block';
	  	return false;
	  }else{
	  	error_edad.style.display      = 'none';
      }
      
      if(!email.match(patrones.correo)){
        alert('El correo no es valido');
        error_email.innerHTML ='El correo no es valido';
        error_email.style.display = 'block';
        return false;
    }else{
        error_email.style.display 	  = 'none';
    }
    var e = document.getElementById("hora");
    var hora = e.options[e.selectedIndex].text
    
    var e = document.getElementById("especialidad");
    var especialidad = e.options[e.selectedIndex].text
      
      if(!fecha.match(patrones.fecha)){
        alert('La Fecha no es valida');
        error_fecha.innerHTML ='La Fecha no es valida (Utiliza dd-mm-aaaa)';
        error_fecha.style.display = 'block';
        return false;
    }else{
        error_fecha.style.display 	  = 'none';

      



    }
    alert('Estimado(a) '+nombre+ ' '+apellidos+', su hora para '+especialidad+' ha sido reservada para el día '+fecha+' a las '+ hora +'. Además, se le envió un mensaje a su correo '+email+' con el detalle de su cita.Gracias por preferirnos.')

	});
});