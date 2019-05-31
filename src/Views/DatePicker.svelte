<script>
	import DatePicker from './../ViewModels/DatePicker.svelte';

	let res = 0;

</script>

<style lang="scss">

</style>


<time>{ res }</time>

<DatePicker bind:value={ res }/>
