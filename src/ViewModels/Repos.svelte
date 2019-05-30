<script>
	import Repos from './../Models/Repos.js';

	let repos = [];

	Repos.list((lists) => {
		repos = lists
		console.log(repos)
	})

</script>

<style lang="scss">

	$color: #eee;
	$color-hover: #f2f2f2;

	ul {
		li {
			a {
				display: block;
				background: $color;
				list-style-type: none;
				/*border-bottom: 1px $color solid;*/
				padding: 10px;
				margin-bottom: 10px;
				&:hover {
					background: $color-hover;
				}
			}
		}
	}
</style>

<ul>
{ #each repos as repo }
	<li><a href="{ repo.url }" target="_blank">{ repo.name }</a></li>
{ /each }
</ul>
