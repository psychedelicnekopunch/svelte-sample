
import App from './../ViewModels/App.svelte';


const IndexController = {
	Index: (context) => {
		console.log(context)
		const app = new App({
			target: document.body,
			props: {
				name: 'world',
			}
		})
	}
}

export default IndexController;
