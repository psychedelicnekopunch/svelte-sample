<script>

	import { createEventDispatcher } from 'svelte';

	export let didClick1 = () => {}

	const dispatch = createEventDispatcher();


	function click1() {
		console.log('Child Fire: click1() - callback - ==========')
		didClick1()
	}

	function click2() {
		console.log('Child Fire: click2() - dispatch - ==========')
		dispatch('didClick2')
	}

</script>

<style lang="scss">

</style>


<button on:click={ click1 }>Fire1</button>
<button on:click={ click2 }>Fire2</button>
