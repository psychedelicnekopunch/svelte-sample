
import Test from './../ViewModels/Pages/Test.svelte';


const TestController = {
	Index: (context) => {
		console.log(context)
		const app = new Test({
			target: document.body,
			props: {
				context: context
			}
		})
	},
	List: (context) => {
		console.log(context)
		const app = new Test({
			target: document.body,
			props: {
				context: context
			}
		})
	}
}

export default TestController;
