import api from './api';

class App {
	constructor() {
		// armazenar as repos adicionadas
		this.repositories = [];
		// saber pelo js o que esta acontecendo no form
		this.formEl = document.getElementById('repo-form');
		this.inputEl = document.querySelector('input[name=repository');
		this.listEl = document.getElementById('repo-list');

		this.registerHandlers();
	}

	registerHandlers() {
		this.formEl.onsubmit = (event) => this.addRepository(event);
	}

	async addRepository(event) {
		// nao deixa o forma recarregar a pagina, de fazer o post
		event.preventDefault();

		const repoInput = this.inputEl.value;

		if (repoInput.length === 0) {
			// colocando so um return, faz com que a requisição seja encerrada nesse ponto
			return;
		}

		const response = await api.get(`/repos/${repoInput}`);

		const {
			name,
			description,
			html_url,
			owner: { avatar_url },
		} = response.data;

		this.repositories.push({
			name,
			description,
			html_url,
			avatar_url,
		});

		this.inputEl.value = '';

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
			linkEl.setAttribute('href', repo.html_url);
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
