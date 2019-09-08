<script>

	import ComponentEventFire from './../ViewModels/ComponentEventFire.svelte';
	import ComponentEventReceiver from './../ViewModels/ComponentEventReceiver.svelte';

	let componentEventReceiver = null

	function fire(e) {
		console.log('parent: fire')
		console.log(e)
		if (componentEventReceiver) {
			componentEventReceiver.detail()
		}
	}


	function receiver(e) {
		console.log('parent: receiver')
		console.log(e)
		componentEventReceiver = e
	}


</script>

<style lang="scss">

</style>


ComponentEventFire.svelte<br>
<ComponentEventFire didClick1={ fire } on:didClick2={ fire }/>
<hr>
ComponentEventReceiver.svelte<br>
<ComponentEventReceiver on:didInit={ receiver }/>
