
import Index from '/src/interfaces/presenters/Postcode.svelte';


const PostcodeController = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
		})
	}
}

export default PostcodeController;
