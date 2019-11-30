<script>

	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';


	export let message = ''
	export let timeout = 3000
	export let type = 'default'

	let _promise


	function change(node, parameters) {
		return {
			update(mes) {
				timeout = (-1 < timeout && timeout < 50) ? 50 : timeout
				if (-1 < timeout) {
					if (message) {
						if (_promise) {
							_promise.clearTimeout()
							_promise = null
						}
						_promise = window.setTimeout(() => {
							message = ''
							_promise = null
						}, timeout)
					}
				}
			}
		}
	}

</script>

<style lang="scss">

	.toaster {
		width: 100%;
		height: 50px;
		bottom: 0;
		left: 0;
		position: fixed;
		display: flex;
		z-index: 100000;
		.toaster-box {
			width: 100%;
			height: 100%;
			max-width: 720px;
			margin: auto;
			.toaster-type {
				height: 100%;
				display: flex;
				margin: 0 10px;
				&.toaster-default {
					background: rgba(#000, .7);
					.toaster-message {
						color: #fff;
					}
				}
				&.toaster-error {
					background: rgba(#f44, .7);
					.toaster-message {
						color: #fff;
					}
				}
			}
			.toaster-message {
				font-size: 12px;
				line-height: 140%;
				margin: auto;
			}
		}
	}

</style>


<span use:change={ message }></span>
{ #if message }
	<div class="toaster"
		in:fade="{
			{
				duration: 100,
				easing: elasticOut,
			}
		}"
		out:fade="{
			{
				duration: 100,
				easing: elasticOut,
			}
		}"
	>
		<div class="toaster-box">
			<div class="toaster-type toaster-{ type }">
				<div class="toaster-message">
					{ message }
				</div>
			</div>
		</div>
	</div>
{ /if }
