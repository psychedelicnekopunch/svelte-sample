<script>
	import Repos from './../Models/Repos.js';

	export let name;

	let repos;

	Repos.list((lists) => {
		repos = lists
		console.log(repos)
	})

</script>

<style>
	h1 {
		color: #f66;
	}
</style>

<h1>Hello { name }!</h1>

{ repos }
