
import page from 'page'

import DatePickerController from '/src/interfaces/controllers/DatePickerController.js'
import IndexController from '/src/interfaces/controllers/IndexController.js'
import TestController from '/src/interfaces/controllers/TestController.js'
import ToasterController from '/src/interfaces/controllers/ToasterController.js'
import MarkdownController from '/src/interfaces/controllers/MarkdownController.js'
import ComponentEventController from '/src/interfaces/controllers/ComponentEventController.js'
import ReposController from '/src/interfaces/controllers/ReposController.js'
import PostcodeController from '/src/interfaces/controllers/PostcodeController.js'

page('/', IndexController.Index)
page('/date_picker', DatePickerController.Index)
page('/test', TestController.List)
page('/test/:id', TestController.Index)
page('/toaster', ToasterController.Index)
page('/markdown', MarkdownController.Index)
page('/component_event', ComponentEventController.Index)
page('/repos', ReposController.Index)
page('/postcode', PostcodeController.Index)
page()

/*
import page from 'page'


import App from './App.svelte';
import App2 from './App2.svelte';

let app = null

page('/', (context) => {
	console.log(context)
	app = new App({
		target: document.body,
		props: {
			name: 'world'
		}
	})
})

page('/test', (context) => {
	console.log(context)
	app = new App2({
		target: document.body,
		props: {
			name: 'world'
		}
	})
})

page('/test/:id', (context) => {
	console.log(context)
	app = new App2({
		target: document.body,
		props: {
			name: 'world'
		}
	})
})

page()

export default app;
*/
