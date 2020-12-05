class App {
	constructor() {
		// armazenar as repos adicionadas
		this.repositories = [];
		// saber pelo js o que esta acontecendo no form
		this.formEl = document.getElementById('repo-form');

		this.registerHandlers();
	}

	registerHandlers() {
		this.formEl.onsubmit = (event) => this.addRepository(event);
	}

	addRepository(event) {
		// nao deixa o forma recarregar a pagina, de fazer o post
		event.preventDefault();

		this.repositories.push({
			name: 'rocketseat.com.br',
			description: 'Tire a sua ideia do papel',
			avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
			html_url: 'http://github.com/rocketseat/rocketseat.com.br',
		});
		console.log(this.repositories);
	}
}

// const MeuApp = new App();
new App();
