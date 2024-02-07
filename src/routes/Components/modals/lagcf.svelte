<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
    import { user } from '../../../lib/stores/user'
    import { Avatar } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

</script>


{#if $modalStore[0]}
    <div class=" bg-surface-800 p-6 rounded-lg w-[30rem] h-[35rem]">
        <div class=" flex justify-between items-center w-full">
            <div class=" flex items-center justify-between">
                <Avatar initials={$user.username} />
                <p class=" font-extrabold text-2xl mx-6">{$user.username}</p>
            </div>
            <button on:click={parent.onClose} class=" focus:!outline[0.3px] focus:!outline-surface-700">
                <img src="/expand.svg" alt="close profile">
            </button>
        </div>
        <div class=" w-full h-[calc(100%-64px-2rem)] mt-8 flex flex-col justify-between">
            <div>
                <p>Velg hvor mye du vil vedde!</p>
                <input type="number">
                <form action="">
                    <label for="heads">heads</label>
                    <input type="radio" id="heads" name="coinflip" class=" focus:!outline[0.3px] focus:!outline-surface-700">
                    <label for="tails">tails</label>
                    <input type="radio" id="tails" name="coinflip" class=" focus:!outline[0.3px] focus:!outline-surface-700">
                </form>
            </div>
            <div class=" w-full flex justify-between">
                <button on:click={parent.onClose} class=" focus:!outline[0.3px] focus:!outline-surface-700 btn variant-filled !bg-surface-500/50 !text-surface-100 !rounded-lg">Cancel</button>
                <button type="submit" class=" focus:!outline[0.3px] focus:!outline-surface-700 btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg">Lag Coinflip</button>
            </div>
        </div>
    </div>
{/if}