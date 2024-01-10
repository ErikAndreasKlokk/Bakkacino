<script lang="ts">
    import { fade } from 'svelte/transition';
	import Chat from '../chat.svelte'
	import Header from '../header.svelte'
    import { onMount } from 'svelte';
    import { Modal } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';
    import { Avatar } from '@skeletonlabs/skeleton';

    initializeStores();


    import { getModalStore } from '@skeletonlabs/skeleton';
			
    const modalStore = getModalStore();
                        


    const modalCreate: ModalSettings = {
        type: 'confirm',
        // Data
        title: 'Lag coinflip spill',
        body: 'Are you sure you wish to proceed?',
        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => console.log('response:', r),
    };

    const modalJoin: ModalSettings = {
        type: 'confirm',
        // Data
        title: 'Join coinflip spill',
        body: 'Are you sure you wish to proceed?',
        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => console.log('response:', r),
    };


    let onload = false

    onMount(() => {
        onload = true
    })
</script>

<Modal />
<div class=" flex justify-between h-screen w-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div class=" flex flex-col items-center h-screen w-[calc(100%-20.625rem)]">
        <Header/>
        <div class=" min-h-24"></div>
        {#if onload}
        <div class=" flex flex-col h-full w-full max-w-[1200px] p-10" in:fade={{duration: 1000}}>
            <div class=" flex items-center w-full justify-between border-b border-surface-400 pb-7">
                <div>
                    <p class=" text-2xl font-semibold tracking-wider">Aktive spill</p>
                </div>
                <div class=" flex items-center">
                    <p class=" text-surface-400 font-semibold">Åpne spill: 0</p>
                    <button type="button" class="btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg ml-5" on:click={() => modalStore.trigger(modalCreate)}>Lag nytt spill</button>
                </div>
            </div>
            <div class=" flex flex-col mt-5">
                <div class=" mb-2">
                    <p class=" text-base font-bold tracking-widest text-surface-300">Spiller</p>
                </div>
                <div class=" flex flex-col border-t border-surface-400"> <!-- Her er diven med alle de aktiv spillene -->
                    <div class=" w-full bg-surface-700 h-24 flex justify-center items-center border-b border-surface-400">
                        <div class=" flex items-center justify-between w-[95%] h-5/6 hover:scale-[1.005] transition-all">
                            <div class=" flex items-center">
                                <Avatar class="border border-transparent hover:border-primary-700/90" initials="EK" background="bg-surface-600" />
                                <p class=" font-bold text-base ml-2">Erik The Wanker</p>
                            </div>
                            <div class=" flex items-center">
                                <img class=" h-5" src="/Gold-Coin.png" alt="coin">
                                <p class=" font-extrabold ">10.0</p>
                            </div>
                            <div>
                                <button type="button" class="btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg ml-5" on:click={() => modalStore.trigger(modalJoin)}>Join</button>
                            </div>
                        </div>
                    </div>
                    <!--______________________________-->
                    <div class=" w-full bg-surface-700 h-24 flex justify-center items-center border-b border-surface-400">
                        <div class=" flex items-center justify-between w-[95%] h-5/6 hover:scale-[1.005] transition-all">
                            <div class=" flex items-center">
                                <Avatar class="border border-transparent hover:border-primary-700/90" initials="EK" background="bg-surface-600" />
                                <p class=" font-bold text-base ml-2">Erik The Wanker</p>
                            </div>
                            <div class=" flex items-center">
                                <img class=" h-5" src="/Gold-Coin.png" alt="coin">
                                <p class=" font-extrabold ">10.0</p>
                            </div>
                            <div>
                                <button type="button" class="btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg ml-5" on:click={() => modalStore.trigger(modalJoin)}>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
    </div>
     <Chat/>
</div>