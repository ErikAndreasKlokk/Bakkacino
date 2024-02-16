<script lang="ts">
    import { user } from '../../../lib/stores/user'
    import { Avatar } from '@skeletonlabs/skeleton';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { SvelteComponent } from 'svelte';
	import Level from '../faktiske_components/level.svelte';

    const modalStore = getModalStore();

    export let parent: SvelteComponent;

</script>

{#if $modalStore[0]}
    <div class=" bg-surface-800 p-6 rounded-lg w-[50rem] h-[40rem]">
        <div class=" flex justify-between items-center w-full">
            <div class=" flex items-center justify-between">
                <Avatar initials={$user.username} />
                <p class=" font-extrabold text-2xl mx-6">{$user.username}</p>
                <p class=" text-xs bg-surface-700 p-[0.15rem] px-2 rounded-lg "><span class=" text-surface-400 font-bold">email: </span>{$user.email}</p>
            </div>
            <button on:click={parent.onClose}>
                <img src="/expand.svg" alt="close profile">
            </button>
        </div>
        <div class=" border-b border-surface-400 my-6"></div>
        <div class=" pb-2">
            <p class=" font-extrabold text-lg mb-2">Leveler</p>
            <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-3 overflow-x-auto px-4 pt-4 pb-4">
                {#each Array(99) as _, i}
                    <Level level={i+1} profile={true} small={false}/>
                {/each}
            </div>
        </div>
        <div class=" border-b border-surface-400 my-6"></div>
        <div>
            <p class=" font-extrabold text-lg mb-2">Spill statistikk</p>
            <div class=" flex ">
                <div class=" flex flex-1 p-2">
                    <div class=" border border-primary-500/50 h-20 w-full rounded-lg bg-gradient-to-l from-primary-500/30 to-transparent flex items-center justify-between">
                        <div class=" ml-3">
                            <p class=" text-xs text-primary-500 font-medium">Favoritt spill</p>
                            <p class=" font-extrabold">Blackjack</p>
                        </div>
                        <small class=" mr-3"></small>
                    </div>
                </div>
                <div class=" flex flex-1 p-2 ">
                    <div class=" border border-pink-400/50 h-20 w-full rounded-lg bg-gradient-to-l from-pink-400/30 to-transparent flex items-center justify-between">
                        <div class=" ml-3">
                            <p class=" text-xs text-pink-400 font-medium">Heldigste vinnet</p>
                            <p class=" font-extrabold">Blackjack</p>
                        </div>
                        <div class=" mr-3 bg-pink-400/30 border border-pink-400 p-[0.35rem] px-1 rounded-lg  ">
                            <p class=" text-xs font-extrabold">x11</p>
                        </div>
                    </div>
                </div>
                <div class=" flex flex-1 p-2">
                    <div class=" border border-yellow-400/50 h-20 w-full rounded-lg bg-gradient-to-l from-yellow-400/30 to-transparent flex items-center justify-between">
                        <div class=" ml-3">
                            <p class=" text-xs text-yellow-400 font-medium">Største vinnet</p>
                            <p class=" font-extrabold">Blackjack</p>
                        </div>
                        <div class=" mr-3 bg-yellow-600/30 border border-yellow-400/70 p-[0.35rem] px-1 rounded-lg">
                            <p class=" text-xs font-extrabold">x11</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}