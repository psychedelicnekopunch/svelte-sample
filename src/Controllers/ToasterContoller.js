
import Toaster from './../Views/Toaster.svelte';


const ToasterContoller = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Toaster({
			target: document.getElementById('app'),
		})
	}
}

export default ToasterContoller;