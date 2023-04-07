<script>

	let lists = []
	let inputValue = ''


	function add() {
		if (!lists) {
			lists = []
		}
		let arr = lists
		arr.push(inputValue)
		lists = arr
		inputValue = ''
		if (lists.length == 3) {
			// Uncaught (in promise) Error: {#each} only iterates over array-like objects.
			lists = null
			// lists = {}
			// lists = undefined
		}
	}

</script>

<style lang="scss">

</style>

<!-- Uncaught (in promise) Error: {#each} only iterates over array-like objects. -->
{ #each lists as list }
	{ list }<br>
{ /each }

<!-- { #each lists || [] as list }
	{ list }<hr>
{ /each } -->

<!-- { #if lists }
	{ #each lists || [] as list }
		{ list }<hr>
	{ /each }
{ /if } -->


<form>
	<input type="text" name="" bind:value={ inputValue }>
	<button type="submit" on:click|preventDefault={ add }>
		add
	</button>
</form>
