<!-- SCRIPT -->
<script>
	// Imports
	import Typewriter from "@components/Typewriter.svelte";

	// Variables
	let prompt = "";

	// Methods
	const wait = (ms) => new Promise((_) => setTimeout(_, ms));
	// const delay = () => wait(Math.random() * 40 + 80);

	async function createPrompt() {
		await wait(250);
		prompt = `
			<p>
				Type or click an option
				(<span class="click" data-click="email"
				>Email</span>/<span class="click" data-click="resume"
				>Résumé</span>/<span class="click" data-click="github"
				>GitHub</span>)
			</p>`;
	}
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
					on:done={createPrompt}
				/>
			</p>
			{@html prompt}
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
		padding: 4em 2em 0 2em;
		font-family: $mono;
		max-width: 600px;
		color: $white;

		p {
			margin: 0;
			margin-bottom: 1em;
		}

		:global(span.click) {
			font-weight: 700;
			cursor: pointer;
		}
	}
</style>
