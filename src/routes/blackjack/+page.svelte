<script>
    import { fade } from 'svelte/transition';
	import Chat from '../chat.svelte'
	import Header from '../header.svelte'
    import { onMount } from 'svelte';

    let onload = false

    onMount(() => {
        onload = true
    })
</script>

<div class="flex justify-between h-screen w-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div class="flex flex-col items-center h-screen w-[calc(100%-20.625rem)]">
        <Header/>
        <div class=" min-h-24"></div>
        {#if onload}
        <div class="flex items-center justify-between bg-primary-700 h-full w-full max-w-[1200px]" in:fade={{duration: 1000}}>
            <div class="flex justify-center h-full w-1/3">
                <div class=" flex items-center bg-surface-900 p-2 border-[2px] border-primary-900 rounded-lg h-[3rem]">
                    <img class=" h-5" src="/Gold-Coin.png" alt="gold coin">
                    <p class=" mr-3 ml-2 font-extrabold font-family-bakka text-sm">0.00</p>
                    <span class="flex h-5.5 mr-1 items-center rounded-lg border border-surface-600 bg-surface-800 px-1.5 pt-0.25 text-[0.625rem] font-bold text-gray-400">COINS</span>
                </div>
            </div>
            <div class="flex bg-primary-900 h-[92%] w-[58%] mr-[2.1%]">
                
            </div>
        </div>
        {/if}
    </div>
     <Chat/>
</div>
    