class App {
	constructor() {
		// armazenar as repos adicionadas
		this.repositories = [];
		// saber pelo js o que esta acontecendo no form
		this.formEl = document.getElementById('repo-form');
		this.listEl = document.getElementById('repo-list');

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
		this.render();
	}

	render() {
		this.listEl.innerHTML = '';

		this.repositories.forEach((repo) => {
			let imgEl = document.createElement('img');
			imgEl.setAttribute('src', repo.avatar_url);

			let titleEl = document.createElement('strong');
			titleEl.appendChild(document.createTextNode(repo.name));

			let descriptionEl = document.createElement('p');
			descriptionEl.appendChild(document.createTextNode(repo.description));

			let linkEl = document.createElement('a');
			linkEl.setAttribute('target', '_brank');
			linkEl.appendChild(document.createTextNode('Acessar'));

			let listItemEl = document.createElement('li');
			listItemEl.appendChild(imgEl);
			listItemEl.appendChild(titleEl);
			listItemEl.appendChild(descriptionEl);
			listItemEl.appendChild(linkEl);

			this.listEl.appendChild(listItemEl);
		});
	}
}

// const MeuApp = new App();
new App();
