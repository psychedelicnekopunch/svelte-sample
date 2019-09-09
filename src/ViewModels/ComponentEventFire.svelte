<script>

	import { createEventDispatcher } from 'svelte';

	export let didClick1 = () => {}

	const _dispatch = createEventDispatcher();


	function click1() {
		console.log('Child Fire: click1() - callback - ==========')
		didClick1()
	}

	function click2() {
		console.log('Child Fire: click2() - dispatch - ==========')
		_dispatch('didClick2')
	}

</script>

<style lang="scss">
	button {
		cursor: pointer;
		background: #444;
		color: #fff;
		padding: 12px 24px;
		margin: 10px 10px;
	}
</style>


<button on:click={ click1 }>Fire1</button>
<button on:click={ click2 }>Fire2</button>
