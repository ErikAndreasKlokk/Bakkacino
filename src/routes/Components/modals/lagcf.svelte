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
            <!-- svelte-ignore a11y-positive-tabindex -->
            <button tabindex="6" on:click={parent.onClose} class=" focus:!outline[0.3px] focus:!outline-surface-700">
                <img src="/expand.svg" alt="close profile">
            </button>
        </div>
        <div class=" w-full h-[calc(100%-64px-2rem)] mt-8 flex flex-col justify-between items-center">
            <div>
                <p class=" font-bold text-xl">Velg hvor mye du vil vedde!</p>
                <div id="betting amount" class="flex items-center bg-surface-900 p-2 border-[2px] border-primary-900 rounded-lg w-[15rem] h-[3rem] my-4">
                    <img class=" h-5" src="/Gold-Coin.png" alt="gold coin">
                    <!-- svelte-ignore a11y-positive-tabindex -->
                    <input tabindex="1" class=" w-full mr-3 ml-2 font-extrabold font-family-bakka text-base text-right focus:!style-none bg-transparent focus:!outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" min="1">
                </div>
                <form action="">
                    <p class=" font-bold text-xl">Hvilken side vil du være?</p>
                    <div class=" flex mt-4">
                        <label for="heads" class=" relative w-40 h-40 flex justify-center items-center rounded-full mx-2">
                            <!-- svelte-ignore a11y-positive-tabindex -->
                            <input tabindex="2" type="radio" id="heads" name="coinflip" class=" absolute focus:!outline[0.3px] focus:!outline-surface-700">
                            <img class=" absolute" src="/Gold-Coin.png" alt="heads">
                            <p class=" absolute text-surface-600 font-bold text-xl" >Heads</p>
                        </label>
                        <label for="tails" class=" relative w-40 h-40 flex justify-center items-center rounded-full mx-2">
                            <!-- svelte-ignore a11y-positive-tabindex -->
                            <input tabindex="3" type="radio" id="tails" name="coinflip" class=" absolute focus:!outline[0.3px] focus:!outline-surface-700">
                            <img class=" absolute w-full" src="/Gold-Coin.png" alt="tails">
                            <p class=" absolute text-surface-600 font-bold text-xl" >Tails</p>
                        </label>
                    </div>
                </form>
            </div>
            <div class=" w-full flex justify-between">
                <!-- svelte-ignore a11y-positive-tabindex -->
                <button tabindex="4" on:click={parent.onClose} class=" focus:!outline[0.3px] focus:!outline-surface-700 btn variant-filled !bg-surface-500/50 !text-surface-100 !rounded-lg">Cancel</button>
                <!-- svelte-ignore a11y-positive-tabindex -->
                <button tabindex="5" type="submit" class=" focus:!outline[0.3px] focus:!outline-surface-700 btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg">Lag Coinflip</button>
            </div>
        </div>
    </div>
{/if}