<script>
    import { draw, fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let onload = false

    onMount(() => {
        onload = true
    })

    let EnFarge = " bg-surface-600 border border-surface-400"
    let TreFarge = " bg-blue-600/40 border border-blue-400/70"
    let FemFarge = " bg-pink-600/60 border border-pink-400"
    let TiFarge = " bg-primary-700/80 border border-primary-500"
    let TjueFarge = " bg-yellow-600/50 border border-yellow-400/70"
    const WhatUserLevel = " border-[0.2rem] font-extrabold"
</script>

<div class="flex justify-between h-screen w-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div class="flex flex-col items-center justify-center h-screen w-[calc(100%-20.625rem)]">
        <div class=" min-h-24"></div>
        {#if onload}
        <div class="flex items-center justify-between bg-primary-700 h-full w-full max-w-[1200px] max-h-[850px] rounded" in:fade={{duration: 1000}}>
            <div id="betting interface" class="flex flex-col justify-center items-center h-full w-1/3">
                <div id="betting amount buttons" class="flex m-[0.5rem] w-[13rem] justify-between ">
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-700 ">1/2</button>
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-700">2X</button>
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-700">Max</button>
                </div>
                <div id="betting amount" class="flex items-center bg-surface-900 p-2 border-[2px] border-primary-900 rounded-lg w-[15rem] h-[3rem] mb-[2rem]">
                    <img class=" h-5" src="/Gold-Coin.png" alt="gold coin">
                    <p class=" mr-3 ml-2 font-extrabold font-family-bakka text-sm"><input class="text-right style-none bg-transparent outline-none remove-arrow" type="number"></p>
                </div>
                <div id="betting numbers" class="flex flex-col items-center justify-between w-[50%] h-[60%]">
                    <button type="button" class="btn rounded-lg w-[6rem] h-[4rem] bg-{EnFarge} ">1</button>
                    <button type="button" class="btn rounded-lg w-[6rem] h-[4rem] bg-{TreFarge} ">3</button>
                    <button type="button" class="btn rounded-lg w-[6rem] h-[4rem] bg-{FemFarge} ">5</button>
                    <button type="button" class="btn rounded-lg w-[6rem] h-[4rem] bg-{TiFarge} ">10</button>
                    <button type="button" class="btn rounded-lg w-[6rem] h-[4rem] bg-{TjueFarge} ">20</button>
                </div>
            </div>
            <div id="spillbrett" class="flex flex-col items-center justify-center bg-primary-900 h-[92%] w-[65%] mr-[2.5%] rounded">
                <img class="h-[80%]" src="Rust wheel small.png" alt="skulle vært et hjul her :(">
            </div>
        </div>
        {/if}
    </div>
</div>
    