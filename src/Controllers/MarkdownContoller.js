
import Markdown from './../Views/Markdown.svelte';


const MarkdownContoller = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new Markdown({
			target: document.getElementById('app'),
		})
	}
}

export default MarkdownContoller;
