<script>

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let counter = 0

	function _methods() {
		return {
			increase: () => {
				_increase()
			}
		}
	}

	function _increase() {
		console.log('Child Counter: increase() ==========')
		counter += 1
	}

	window.addEventListener('load', () => {
		console.log('Child: dispatch("didInit")')
		dispatch('didInit', _methods)
	})

</script>

<style lang="scss">
	div {
		font-size: 20px;
		font-weight: bold;
		padding: 12px;
	}
</style>


<div>{ counter }</div>
