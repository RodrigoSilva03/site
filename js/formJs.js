newFunction();

function newFunction() {
	const newLocal_1 = $(function () {
		// Funcao resetar campos
		$('input[type=text]').focus(function () {
			resetarCampoInvalido($(this));
		});

		$('form#form1').submit(function () {
			//e.preventDefault();
			var nome = $('input[name=nome]').val();
			var telefone = $('input[name=telefone]').val();
			var email = $('input[name=email]').val();

			if (verificarNome(nome) == false) {
				aplicarCampoInvalido($('input[name=nome]'));
				return false;
			} else if (verificarTelefone(telefone) == false) {
				aplicarCampoInvalido($('input[name=telefone]'));
				return false;
			} else if (verificarEmail(email) == false) {
				aplicarCampoInvalido($('input[name=email]'));
				return false;
			} else {
				// console.log('Enviados');
				// return false;
				alert('Formulario Enviado com Susseso!');
			}


			//Se chegar ate o final é por que está tudo okay!
		}); // fim da funcao submit




		//Funcoes para estilizar o campo do formulario 
		function aplicarCampoInvalido(el) {
			el.css('color', 'red');
			el.css('border', '2px solid red');
			//el.data('invalido','true');
			el.val('Campo Invalido');
		}

		function resetarCampoInvalido(el) {
			el.css('color', 'black');
			el.css('border', '1px solid #ccc');
			el.val('');
		}

		//Funcoes para verificar nossos campos
		function verificarNome(nome) {
			//Contando a quantidade de espaco e seus valores
			if (nome == '') {
				return false;
			}
			var amount = nome.split(' ').length;
			var splitStr = nome.split(' ');
			if (amount >= 2) { // verificacao de espaco
				for (var i = 0; i < amount; i++) {
					if (splitStr[i].match(/^[A-z]{1}[a-z]{1,}$/)) {
						//		console.log('Ok bateu a condicao');
					} else {
						//		aplicarCampoInvalido($('input[name=nome]'));
						return false;
					}
				}
			} else {
				//aplicarCampoInvalido($('input[name=nome]'));
				console.log('Não bate com a condição Nome Completo');
				return false;
			}
		}

		function verificarTelefone(telefone) {
			if (telefone == '') {
				return false;
			}
			if (telefone.match(/^\[0-9]{5}-[0-9]{4}$/) == null) {
				return false;
			}
		}

		function verificarEmail(email) {
			if (email == '')
				return false;
			if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
				return false;
			}
		}

	});
	const newLocal = newLocal_1;
}
