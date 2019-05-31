
import page from 'page'

import DatePickerContoller from './Controllers/DatePickerContoller.js'
import IndexContoller from './Controllers/IndexContoller.js'
import TestContoller from './Controllers/TestContoller.js'

page('/', IndexContoller.Index)
page('/date_picker', DatePickerContoller.Index)
page('/test', TestContoller.List)
page('/test/:id', TestContoller.Index)
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