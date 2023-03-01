	window.onload = function() {
		$("#onload").fadeOut();
		$("body").removeClass("hidden");
	}

	/*var comienzo = document.getElementById('comienzo');
	setTimeout(function() {
		alert("asdasdsa")
		comienzo.classList.add('cerrar');
	}, 4000);*/

		var g_sol = 274;
		var g_mercurio = 3.7; 
		var g_venus = 8.87;
		var g_tierra = 9.807;
		var g_luna = 1.62;
		var g_marte = 3.721;
		var g_jupiter = 24.79;
		var g_saturno = 10.44;	
		var g_urano = 8.87;
		var g_neptuno = 11.15;
		var g_pluton = 0.62;
		var nombre;

	function operaciones (op)
	{
		var ops= {
			sol: function PesoEnElSol(persona) {
				return parseInt((persona * g_sol)/g_tierra);
	},
			mercurio: function PesoEnMercurio(persona) {
				return parseInt((persona * g_mercurio)/g_tierra);
	},
			venus: function PesoEnVenus(persona) {
				return parseInt((persona * g_venus)/g_tierra);
	},
			tierra: function PesoEnLaTierra(persona) {
				return parseInt((persona * g_tierra)/g_tierra);
	},
			luna: function PesoEnLaLuna(persona) {
				return parseInt((persona * g_luna)/g_tierra);
	},
			marte: function PesoEnMarte(persona) {
				return parseInt((persona * g_marte)/g_tierra);
	},
			jupiter: function PesoEnJupiter(persona) {
				return parseInt((persona * g_jupiter)/g_tierra);
	},
			saturno: function PesoEnSaturno(persona) {
				return parseInt((persona * g_saturno)/g_tierra);
	},
			urano: function PesoEnUrano(persona) {
				return parseInt((persona * g_urano)/g_tierra);
	},
			neptuno: function PesoEnNeptuno(persona) {
				return parseInt((persona * g_neptuno)/g_tierra);
	},	
			pluton: function PesoEnPluton(persona) {
				return parseInt((persona * g_pluton)/g_tierra);
	}
 	};

 	var num1 = document.getElementById("num1").value;	

	if (isNaN(parseFloat(document.getElementById("num1").value)))
	{
		alert("Coloque un número en Coloque aquí su peso ");
		document.getElementById("num1").innerText= "0";
		document.getElementById("num1").focus();
	}

	else {

	switch(op) {

		case 'sol':
		var resultado = ops.sol(num1);
		nombre = "el Sol";
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'mercurio':
		nombre= "Mercurio";
		var resultado = ops.mercurio(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'venus': 
		nombre= "Venus";
		var resultado = ops.venus(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'tierra':
		nombre= "la Tierra";
		var resultado = ops.tierra(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'luna':
		nombre= "la Luna";
		var resultado = ops.luna(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'marte':
		nombre= "Marte";
		var resultado = ops.marte(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'jupiter': 
		nombre= "Jupiter";
		var resultado = ops.jupiter(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'saturno': 
		nombre= "Saturno";
		var resultado = ops.saturno(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'urano':
		nombre= "Urano";
		var resultado = ops.urano(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'neptuno':
		nombre= "Neptuno";
		var resultado = ops.neptuno(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg.";
		break;

		case 'pluton': 
		nombre= "Pluton";
		var resultado = ops.pluton(num1);
		var divResultado = document.getElementById("resultado");
		divResultado.innerText = "Tu peso en "+ nombre + " es de " + resultado + " kg";
		break;

	}
	}
	}