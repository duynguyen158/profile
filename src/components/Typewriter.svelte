<!-- SCRIPT -->
<script>
	// Imports
	import { onMount, createEventDispatcher } from "svelte";

	// Exports
	export let text = "";
	// export let command = false;

	// Lifecycle
	onMount(() => {
		function loop() {
			if (written === text) {
				dispatch("done");
				finished = true;
				return;
			}

			written += text[written.length];
			timeout = setTimeout(loop, 60);
		}

		let timeout = setTimeout(loop);

		return () => clearTimeout(timeout);
	});

	// Variables
	let written = "";
	let finished = false;
	const dispatch = createEventDispatcher();
</script>

<!-- MARKUP -->
<span class:finished>{written}</span>

<!-- STYLES -->
<style lang="scss">
	@keyframes phase {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}
	}

	span {
		&:not(.finished)::after {
			content: "▌";
			display: inline-block;
			animation: phase 1.25s infinite;
		}
	}
</style>
