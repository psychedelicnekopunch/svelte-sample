<script>

	import marked from 'marked'

	marked.setOptions({
		breaks: true,
	})

</script>

<style lang="scss">

	$color: #f66;

	h1 {
		color: $color;
	}

</style>


<h1>Markdown</h1>

<div>
	<div class="md">
		{ @html marked(`

### Headline 3

* list
* list
* list

		`) }
	</div>
</div>
