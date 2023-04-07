
import Index from '/src/interfaces/presenters/Each.svelte';


const EachController = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
		})
	}
}

export default EachController;
