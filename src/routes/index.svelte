<!-- SCRIPT -->
<script>
</script>

<!-- MARKUP -->
<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
	<title>Duy Nguyen's Personal Site</title>
	<style>
		body {
			margin: 0;
		}
	</style>
</svelte:head>

<div id="app">
	<article>
		<header class="intro">
			<p>
				Duy Nguyen is a data journalist & news apps developer with a background
				in statistics & machine learning.
			</p>
		</header>
	</article>
</div>

<!-- STYLES -->
<style lang="scss">
	@import "../base";

	div#app {
		margin: 0 20px;
	}

	p {
		font-family: $mono;
		max-width: 600px;
	}
</style>
