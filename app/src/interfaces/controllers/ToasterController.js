
import Toaster from '/src/interfaces/presenters/Toaster.svelte';


const ToasterController = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Toaster({
			target: document.getElementById('app'),
		})
	}
}

export default ToasterController;
