<script>
    import { closeModal } from 'svelte-modals'
    import { user } from '../lib/stores/user'
    import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

    // provided by Modals
    export let isOpen

    let En_Ti = " bg-surface-600 border border-surface-400"
    let Elve_Tjuefem = " bg-blue-600/40 border border-blue-400/70"
    let Tjueseks_Femtifem = " bg-pink-600/60 border border-pink-400"
    let Femtiseks_Åtti = " bg-primary-700/80 border border-primary-500"
    let Åttien_Nittini = " bg-yellow-600/50 border border-yellow-400/70"
    const WhatUserLevel = " border-[0.2rem] font-extrabold"

    let levelStyle = []

    function leveler() {
        for (let i = 1; i < 100; i++) {
            if (i < 11) {
                if ($user.level >= i) {
                    levelStyle.push(En_Ti + WhatUserLevel)
                } else {
                    levelStyle.push(En_Ti)
                }
            }
            if (i > 10 && i < 26) {
                if ($user.level >= i) {
                    levelStyle.push(Elve_Tjuefem + WhatUserLevel)
                } else {
                    levelStyle.push(Elve_Tjuefem)
                }
            }
            if (i > 25 && i < 56) {
                if ($user.level >= i) {
                    levelStyle.push(Tjueseks_Femtifem + WhatUserLevel)
                } else {
                    levelStyle.push(Tjueseks_Femtifem)
                }
            }
            if (i > 55 && i < 81) {
                if ($user.level >= i) {
                    levelStyle.push(Femtiseks_Åtti + WhatUserLevel)
                } else {
                    levelStyle.push(Femtiseks_Åtti)
                }
            }
            if (i > 80 && i < 100) {
                if ($user.level >= i) {
                    levelStyle.push(Åttien_Nittini + WhatUserLevel)
                } else {
                    levelStyle.push(Åttien_Nittini)
                }
            }
            
        }
    }
    leveler()

    let userLevelStyle = En_Ti

    function userLevel() {
        if ($user.level < 11) {
            return userLevelStyle = En_Ti
        }
        if ($user.level < 10 && $user.level > 26) {
            return userLevelStyle = Elve_Tjuefem
        }
        if ($user.level > 25 && $user.level < 56) {
            return userLevelStyle = Tjueseks_Femtifem
        }
        if ($user.level > 55 && $user.level < 81) {
            return userLevelStyle = Femtiseks_Åtti
        }
        if ($user.level > 80 && $user.level < 100) {
            return userLevelStyle = Åttien_Nittini
        }
    }

    userLevel()
</script>

{#if isOpen}
<div class=" top-0 right-0 fixed h-full w-screen flex flex-col justify-center items-center z-50">
    <div class=" bg-surface-800 p-6 rounded-lg w-[50rem] h-[40rem]">
        <div class=" flex justify-between items-center w-full">
            <div class=" flex items-center justify-between">
                <Avatar initials={$user.username} />
                <p class=" font-extrabold text-2xl mx-6">{$user.username}</p>
                <p class=" text-xs bg-surface-700 p-[0.15rem] px-2 rounded-lg "><span class=" text-surface-400 font-bold">email: </span>{$user.email}</p>
            </div>
            <button on:click={() => closeModal()}>
                <img src="/expand.svg" alt="close profile">
            </button>
        </div>
        <div class=" border-b border-surface-400 my-6"></div>
        <div class=" pb-2">
            <p class=" font-extrabold text-lg mb-2">Leveler</p>
            <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-3 overflow-x-auto px-4 pt-4 pb-4">
                {#each levelStyle as style, i}
                    <div class="snap-start shrink-0 w-7 h-7 rounded-lg flex justify-center items-center text-sm {style}">{i+1}</div>
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
  </div>
{/if}