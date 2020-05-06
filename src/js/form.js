enviarEmail = () => {
	const email = `
     <h1>${document.getElementById("assunto").value}</h1>
     <br>
     <h4>Nome: </h4> ${document.getElementById("nome").value}
     <br>
     <h4>Email: </h4> ${document.getElementById("email").value}
     <h4>Mensagem:</h4>
     <br>
     ${document.getElementById("mensagem").value}
     `;

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
				subject: document.getElementById("assunto").value,
				text: email,
			},
			headers: {
				Authorization: `Bearer ${res.data.token}`,
			},
		}).then((res) => {
			console.log(res);
		});
	});
};

// console.log(
// 	"EMAIL: " + document.getElementById("email").value
// );

// axios.post("https://needy-api.herokuapp.com/login", {
// 	email: "teste@teste.com",
// 	senha: "teste",
// })
// 	.then(function (response) {
// 		axios.post(
// 			"http://needy-api.herokuapp.com/sendmail",
// 			{
// 				headers: {
// 					Authorization: `Bearer ${response.token}`,
// 				},
// 				data: {
// 					to: "gatodobairo@gmail.com",
// 					subject: document.getElementById(
// 						"assunto"
// 					).value,
// 					text: email,
// 				},
// 			}
// 		);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});
