<script>

	import DatePicker from '/src/interfaces/presenters/components/DatePicker.svelte';


	let res = 0;

</script>

<style lang="scss">

</style>


<time>{ res }</time>

<DatePicker bind:value={ res }/>
