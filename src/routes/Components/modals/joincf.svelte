<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	// Base Classes

</script>


{#if $modalStore[0]}
	<div class=" flex">
        <p>Delta i Coinflippen</p>
		<button on:click={parent.onClose}><img src="/expand.svg" alt="lukk modal"></button>
	</div>
{/if}