<script>

	let i = 0


	function call() {
		i++
		console.log('call')
	}

</script>

<style lang="scss">

</style>


call: { i } times.


<h2>in form tag</h2>

<form>
	<input type="text" name="" value="" placeholder="focus and press ENTER">
	<button type="button" on:click|preventDefault={ call }>
		type button
	</button>
</form>


<form method="GET">
	<input type="text" name="" value="" placeholder="focus and press ENTER">
	<button type="submit" on:click|preventDefault={ call }>
		type submit
	</button>
</form>




<h2>hove no form tag</h2>

<div>
	<input type="text" name="" value="" placeholder="focus and press ENTER">
	<button type="button" on:click|preventDefault={ call }>
		type button
	</button>
</div>


<div method="GET">
	<input type="text" name="" value="" placeholder="focus and press ENTER">
	<button type="submit" on:click|preventDefault={ call }>
		type submit
	</button>
</div>
