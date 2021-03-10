
import ComponentEvent from '/src/interfaces/presenters/ComponentEvent.svelte';


const ComponentEventController = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new ComponentEvent({
			target: document.getElementById('app'),
		})
	}
}

export default ComponentEventController;
