function valorInput() {
	var inputBox = document.getElementById("mensaje");
	return inputBox.value;
}
function send() {
	var inputBoxValue = valorInput();
	if (inputBoxValue !== "") {
		boxBubble(inputBoxValue);
		clean();
	}
}

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
          send();
    }
});

function boxBubble(bubbleText) {
	var horaActual = new Date();
	var minuto = horaActual.getMinutes();
	var hora = horaActual.getHours();
	if(minuto<10){
		minuto = "0" + minuto
	}
	if(hora<10){
		hora = "0" + hora
	}
	if(hora<12){
		minuto += " A.M."
	}

	var bubble = document.getElementById("col-5");
	var elemento = document.createElement("div");
	elemento.className = "mybubble";
	elemento.innerHTML =  "<div>" + "<h5>" + bubbleText + "</h5>" + "<h6>" + hora + ":" + minuto + "</h6>" + "</div>";
	bubble.appendChild(elemento);
}
function clean() {
	var inputBox = document.getElementById("mensaje");
	inputBox.value = "";
	inputBox.focus();
}

var listaContactos = [
	{
		nombre: "Raymi Saldomando",
		imagen: "image/raymi.jpg"
	},
	{
		nombre: "Mariana Costa",
		imagen: "image/mariana.jpg"
	},
	{
		nombre: "Ana Maria Martinez Franklin",
		imagen: "image/anamaria.jpg"
	},
	{
		nombre: "Rodulfo Prieto",
		imagen: "image/rodulfo.jpg"
	},
	{
		nombre: "Andrea Lamas",
		imagen: "image/andrea.jpg"
	},
	{
		nombre: "Maria Paula Rivarola",
		imagen: "image/mariapaula.jpg"
	},
	{
		nombre: "Katy Sanchez",
		imagen: "image/katy.jpg"
	},
	{
		nombre: "Aldo Alfaro",
		imagen: "imagen/aldo.jpg"
	}
]

function nombreConversacion() {
	var horaActual = new Date();
	var minuto = horaActual.getMinutes();
	var hora = horaActual.getHours();
	if(minuto<10){
		minuto = "0" + minuto
	}
	if($(".contacts").click()) {
		$("#nombre").html("<h4>" + lugares[id].imagen + listaContactos[id].nombre + "</h4>" + "</br>" + "<h5>" + "últ. vez a las " + hora + ":" + minuto)
	}	
}





