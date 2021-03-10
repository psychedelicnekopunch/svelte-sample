<script>

	import Toaster from '/src/interfaces/presenters/components/Toaster.svelte';


	let message1 = '';
	let message2 = '';


</script>

<style lang="scss">

</style>

<button on:click|preventDefault={ () => { message1 = 'default message' } }>Toaster Demo 1</button>

<Toaster bind:message={ message1 } timeout=1000/>

<button on:click|preventDefault={ () => { message2 = 'error message' } }>Toaster Demo 2</button>

<Toaster bind:message={ message2 } type="error"/>
