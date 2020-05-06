let form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
	// add dados as variáveis
	let nome = document.getElementById("nome").value;
	let email = document.getElementById("email").value;
	let assunto = document.getElementById("assunto").value;
	let mensagem = document.getElementById("mensagem").value;

	axios({
		method: "POST",
		url: "http://needy-api.herokuapp.com/login",
		data: {
			email: "teste@teste.com",
			senha: "teste",
		},
	}).then((res) => {
		console.log(res.data.token);
		axios({
			method: "POST",
			url: "http://needy-api.herokuapp.com/sendmail",
			data: {
				para: "needyhorizon@gmail.com",
				assunto: assunto,
				texto: mensagem,
				remetenteEmail: email,
				remetenteNome: nome,
			},
			headers: {
				Authorization: `Bearer ${res.data.token}`,
			},
		}).then((res) => {
			console.log(res);
		});
	});

	document.getElementById("nome").value = "";
	document.getElementById("email").value = "";
	document.getElementById("assunto").value = "";
	document.getElementById("mensagem").value = "";

	// impede o envio do form
	e.preventDefault();
});
