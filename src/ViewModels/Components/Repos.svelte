<script>
	import Repos from './../../Models/Repos.js';

	let repos = [];

	Repos.list((lists) => {
		repos = lists
		console.log(repos)
	})

</script>

<style>
	li {
		list-style-type: none;
		border-bottom: 1px #eee solid;
		padding: 10px;
		margin-bottom: 10px;
	}
</style>

<ul>
{ #each repos as repo }
	<li><a href="{ repo.url }" target="_blank">{ repo.name }</a></li>
{ /each }
</ul>
