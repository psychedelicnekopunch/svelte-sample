<script>

	import Repos from './../Components/Repos.svelte';

	export let name;

</script>

<style>
	h1 {
		color: #f66;
	}
</style>

<h1>Hello { name }!</h1>

<Repos/>