
import App2 from './../ViewModels/App2.svelte';


const TestController = {
	Index: (context) => {
		console.log(context)
		const app = new App2({
			target: document.body,
			props: {
				context: context
			}
		})
	},
	List: (context) => {
		console.log(context)
		const app = new App2({
			target: document.body,
			props: {
				context: context
			}
		})
	}
}

export default TestController;
