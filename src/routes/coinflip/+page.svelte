<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
	import Cfspill from '../cfspill.svelte';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
			
    const modalStore = getModalStore();


    const modalLag: ModalSettings = {
        type: 'component',
        component: 'lagCF'
        // Data
    };

    let onload = false

    onMount(() => {
        onload = true
    })
</script>

<div class=" flex justify-between h-screen w-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div class=" flex flex-col items-center h-screen w-[calc(100%-20.625rem)]">
        <div class=" min-h-24"></div>
        {#if onload}
        <div class=" flex flex-col h-full w-full max-w-[1200px] p-10" in:fade={{duration: 1000}}>
            <div class=" flex items-center w-full justify-between border-b border-surface-400 pb-7">
                <div>
                    <p class=" text-2xl font-semibold tracking-wider">Aktive spill</p>
                </div>
                <div class=" flex items-center">
                    <p class=" text-surface-400 font-semibold">Åpne spill: 0</p>
                    <button type="button" class="btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg ml-5" on:click={() => modalStore.trigger(modalLag)}>Lag ny Coinflip</button>
                </div>
            </div>
            <div class=" flex flex-col mt-5">
                <div class=" mb-2">
                    <p class=" text-base font-bold tracking-widest text-surface-300">Spiller</p>
                </div>
                <div class=" flex flex-col border-t border-surface-400"> <!-- Her er diven med alle de aktiv spillene -->
                    <Cfspill />
                    <Cfspill />
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>