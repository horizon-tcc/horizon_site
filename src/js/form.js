function enviarEmail() {
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
				to: "gatodobairo@gmail.com",
				subject: "sla",
				text: "miguel is very gay.",
			},
			headers: {
				Authorization: `Bearer ${res.data.token}`,
			},
		}).then((res) => {
			console.log(res);
		});
	});
}

document.getElementById("btnEnviar").addEventListener("click", enviarEmail);
