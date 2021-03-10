
import Markdown from '/src/interfaces/presenters/Markdown.svelte';


const MarkdownController = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Markdown({
			target: document.getElementById('app'),
		})
	}
}

export default MarkdownController;
