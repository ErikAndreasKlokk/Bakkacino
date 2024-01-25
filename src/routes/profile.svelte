<script>
    import { closeModal } from 'svelte-modals'
    import { user } from '../lib/stores/user'
    import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

    // provided by Modals
    export let isOpen

    const En_Ti = " bg-surface-600 border border-surface-400"
    const Elve_Tjuefem = " bg-blue-600/40 border border-blue-400/70"
    const Tjueseks_Femtifem = " bg-pink-600/60 border border-pink-400"
    const Femtiseks_Åtti = " bg-primary-700/80 border border-primary-500"
    const Åttien_Nittini = " bg-yellow-600/50 border border-yellow-400/70"

    let levelStyle = []

    function leveler() {
        for (let i = 1; i < 100; i++) {
            if (i < 11) {
                levelStyle.push(En_Ti)
            }
            if (i > 10 && i < 26) {
                levelStyle.push(Elve_Tjuefem)
            }
            if (i > 25 && i < 56) {
                levelStyle.push(Tjueseks_Femtifem)
            }
            if (i > 55 && i < 81) {
                levelStyle.push(Femtiseks_Åtti)
            }
            if (i > 80 && i < 100) {
                levelStyle.push(Åttien_Nittini)
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
                <p class=" {userLevelStyle} w-7 h-7 flex justify-center items-center rounded-lg text-sm">{$user.level}</p>
            </div>
            <button on:click={() => closeModal()}>
                <img src="/expand.svg" alt="close profile">
            </button>
        </div>
        <div class=" border border-surface-400 p-2  mt-4 rounded-lg">
            <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-3 overflow-x-auto px-4 pt-4 pb-4">
                {#each levelStyle as style, i}
                    <div class="snap-start shrink-0 w-7 h-7 rounded-lg flex justify-center items-center text-sm {style}">{i+1}</div>
                {/each}
            </div>
        </div>
    </div>
  </div>
{/if}