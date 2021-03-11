
import Index from '/src/interfaces/presenters/Repos.svelte';


const ReposController = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
		})
	}
}

export default ReposController;
