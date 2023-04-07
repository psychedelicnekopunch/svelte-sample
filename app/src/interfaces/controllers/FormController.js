
import Index from '/src/interfaces/presenters/Form.svelte';


const FormController = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
		})
	}
}

export default FormController;
