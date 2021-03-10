<script>

	import ComponentEventFire from '/src/interfaces/presenters/components/ComponentEventFire.svelte'
	import ComponentEventCounter from '/src/interfaces/presenters/components/ComponentEventCounter.svelte'


	let componentEventCounter = null


	function fire(e) {
		console.log('parent: fire')
		console.log(e)
		if (componentEventCounter) {
			componentEventCounter.detail().increase()
		}
	}


	function receiver(e) {
		console.log('parent: receiver')
		console.log(e)
		componentEventCounter = e
	}


</script>

<style lang="scss">
	.card {
		background: #fff;
		box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
		border-radius: 2px;
		padding: 12px;
		margin: 0 0 12px;
		> .card {
			background: #f5f5f5;
		}
	}
</style>

<div class="card">
	<h1>src/Views/ComponentEvent.svelte</h1>
	<div class="card">
		<h2>src/ViewModels/ComponentEventFire.svelte</h2>
		<ComponentEventFire didClick1={ fire } on:didClick2={ fire }/>
	</div>
	<div class="card">
		<h2>src/ViewModels/ComponentEventCounter.svelte</h2>
		<ComponentEventCounter on:didInit={ receiver }/>
	</div>
</div>
