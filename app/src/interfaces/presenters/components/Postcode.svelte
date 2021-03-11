<script>

	import Postcode from '/src/interfaces/database/Postcode.js';


	let postcodes = [];

	// blocked by CORS policy: No 'Access-Control-Allow-Origin' で取得できない
	Postcode.list(1000001, (lists) => {
		postcodes = lists
		console.log(postcodes)
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
