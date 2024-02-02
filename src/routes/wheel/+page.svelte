<script>
    import { draw, fade } from 'svelte/transition';
	import Chat from '../chat.svelte'
	import Header from '../header.svelte'
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

    function SpinWheel() {
    const Wheel = document.getElementById('wheel');
    const RandomRotation = Math.random() * (720 - 360) + 360

    Wheel.style.transition = 'transform 3s ease-out';
    Wheel.style.transform = `rotate(${RandomRotation}deg)`;
    console.log(RandomRotation);
}

</script>

<div class="flex justify-between h-screen w-screen bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
    <div class="flex flex-col items-center justify-center h-screen w-[calc(100%-20.625rem)]">
        <div class=" min-h-24"></div>
        {#if onload}
        <div id="hele greia" class="flex items-center justify-between bg-surface-700 h-full w-full max-w-[1200px] max-h-[850px] rounded" in:fade={{duration: 1000}}>
            <div id="betting interface" class="flex flex-col justify-center items-center h-full w-1/3">
                <div id="betting amount buttons" class="flex m-[0.5rem] w-[13rem] justify-between ">
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-900 ">1/2</button>
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-900">2X</button>
                    <button type="button" class="btn rounded-lg w-[4rem] h-[2.5rem] bg-surface-900">Max</button>
                </div>
                <div id="betting amount" class="flex items-center bg-surface-900 p-2 border-[2px] border-primary-900 rounded-lg w-[15rem] h-[3rem] mb-[2rem]">
                    <img class=" h-5" src="/Gold-Coin.png" alt="gold coin">
                    <p class=" mr-3 ml-2 font-extrabold font-family-bakka text-sm"><input class="text-right style-none bg-transparent outline-none remove-arrow" type="number"></p>
                </div>
                <div id="betting numbers" class="flex rounded flex-col items-center pb-[1.5rem] pt-[1.5rem] justify-between w-[40%] h-[60%]">
                    <div class="flex flex-col items-center"><button type="button" on:click={SpinWheel} class="btn rounded-lg w-[6rem] h-[100%] bg-{EnFarge} ">1</button><div><span class="text-[10px]">betaler 2X innsats</span></div></div>
                    <div class="flex flex-col items-center"><button type="button" class="btn rounded-lg w-[6rem] h-[100%] bg-{TreFarge} ">3</button><div><span class="text-[10px]">betaler 4X innsats</span></div></div>
                    <div class="flex flex-col items-center"><button type="button" class="btn rounded-lg w-[6rem] h-[100%] bg-{FemFarge} ">5</button><div><span class="text-[10px]">betaler 6X innsats</span></div></div>
                    <div class="flex flex-col items-center"><button type="button" class="btn rounded-lg w-[6rem] h-[100%] bg-{TiFarge} ">10</button><div><span class="text-[10px]">betaler 11X innsats</span></div></div>
                    <div class="flex flex-col items-center"><button type="button" class="btn rounded-lg w-[6rem] h-[100%] bg-{TjueFarge} ">20</button><div><span class="text-[10px]">betaler 21X innsats</span></div></div>
                </div>
            </div>
            <div id="spillbrett" class="flex items-center justify-center bg-surface-900 h-[92%] w-[65%] mr-[2.5%] rounded">
                <img id="wheel" class="h-[80%]" src="Rust wheel small.png" alt="skulle vært et hjul her :(">
                <div id="wheel logg" class="flex items-end flex-col w-[15%] h-[100%]">
                    <button type="button" class="mt-1 btn-icon rounded-lg w-[100%] h-[3%] bg-{EnFarge} "></button>
                </div>
            </div>
            
        </div>
        {/if}
    </div>
</div>

<style>
    .remove-arrow::-webkit-inner-spin-button,
    .remove-arrow::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>