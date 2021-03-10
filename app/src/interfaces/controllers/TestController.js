
import Test from '/src/interfaces/presenters/Test.svelte';


const TestController = {
	Index: (context) => {
		console.log(context)
		document.getElementById('app').innerText = ''
		const app = new Test({
			// target: document.body,
			target: document.getElementById('app'),
			props: {
				context: context
			}
		})
	},
	List: (context) => {
		console.log(context)
		document.getElementById('app').innerText = ''
		const app = new Test({
			// target: document.body,
			target: document.getElementById('app'),
			props: {
				context: context
			}
		})
	}
}

export default TestController;
