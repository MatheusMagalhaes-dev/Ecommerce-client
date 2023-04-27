<script lang="ts">
	import Header from '$lib/components/header/header.svelte';
import '../app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer />

<style lang="scss" global>
	main {
        @apply w-full max-w-6xl mx-auto py-8 min-h-screen
    }
</style>
