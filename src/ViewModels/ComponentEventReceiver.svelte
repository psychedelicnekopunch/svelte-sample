<script>

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let counter = 0

	function increase() {
		console.log('Child Receiver: increase() ==========')
		counter += 1
	}

	window.addEventListener('load', () => {
		console.log('Child: dispatch("didInit")')
		dispatch('didInit', increase)
	})

</script>

<style lang="scss">

</style>


<div>{ counter }</div>
