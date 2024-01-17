<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	const cBase = 'card p-4 w-modal shadow-xl space-y-4';

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class=" rounded-3xl bg-primary-800"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="modal-example-form {cBase} text-surface-100">
		<slot name="header" />
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
		<button class=" bg-primary-600/50 border border-primary-700 rounded-xl px-2 py-[0.3rem]" autofocus on:click={() => dialog.close()}>cancel</button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
