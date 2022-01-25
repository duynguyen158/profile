<!-- SCRIPT -->
<script>
	// Imports
	import Typewriter from "@components/Typewriter.svelte";
</script>

<!-- MARKUP -->
<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
	<title>Duy Nguyen's Personal Site</title>
</svelte:head>

<div id="app">
	<article id="terminal">
		<header class="intro">
			<p>
				<Typewriter
					text="Duy Nguyen is a data journalist & newsroom engineer with a background in machine learning."
				/>
			</p>
		</header>
	</article>
</div>

<!-- STYLES -->
<style lang="scss">
	@import "../base";

	:global(body) {
		margin: 0;
		background-color: $black;
	}

	#terminal {
		padding: 2em 2em;
	}

	p {
		font-family: $mono;
		max-width: 600px;
		color: $white;
	}
</style>
