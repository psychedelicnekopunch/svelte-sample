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

<nav>
	<ul>
		<li><a href="/date_picker">Date Picker &gt;</a></li>
		<li><a href="/test/123">test &gt;</a></li>
	</ul>
</nav>

<Repos/>
