
import Index from '/src/interfaces/presenters/Index.svelte';


const IndexController = {
	Index: (context) => {
		console.log(context)
		document.getElementById('app').innerText = ''
		const app = new Index({
			// target: document.body,
			target: document.getElementById('app'),
			props: {
				name: 'world',
			}
		})
	}
}

export default IndexController;
