<script>

	import Repos from './../ViewModels/Repos.svelte';

	export let name;

</script>

<style lang="scss">

	$color: #f66;

	h1 {
		color: $color;
	}
</style>

<h1>Hello { name }!</h1>

<Repos/>