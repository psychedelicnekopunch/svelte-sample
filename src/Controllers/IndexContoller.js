
import Index from './../Views/Index.svelte';


const IndexController = {
	Index: (context) => {
		console.log(context)
		const app = new Index({
			target: document.body,
			props: {
				name: 'world',
			}
		})
	}
}

export default IndexController;
