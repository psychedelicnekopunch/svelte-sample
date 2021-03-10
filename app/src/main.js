
import page from 'page'
import sass from './../sass/style.scss'

import DatePickerController from './Controllers/DatePickerController.js'
import IndexController from './Controllers/IndexController.js'
import TestController from './Controllers/TestController.js'
import ToasterController from './Controllers/ToasterController.js'
import MarkdownController from './Controllers/MarkdownController.js'
import ComponentEventController from './Controllers/ComponentEventController.js'

page('/', IndexController.Index)
page('/date_picker', DatePickerController.Index)
page('/test', TestController.List)
page('/test/:id', TestController.Index)
page('/toaster', ToasterController.Index)
page('/markdown', MarkdownController.Index)
page('/component_event', ComponentEventController.Index)
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
