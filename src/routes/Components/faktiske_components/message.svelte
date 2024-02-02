<script>
    import { Avatar } from '@skeletonlabs/skeleton';
    import { user } from '../../../lib/stores/user.js'

    export let username;
    export let message;
    export let level;

    let En_Ti = " bg-surface-600 border border-surface-400"
    let Elve_Tjuefem = " bg-blue-600/40 border border-blue-400/70"
    let Tjueseks_Femtifem = " bg-pink-600/60 border border-pink-400"
    let Femtiseks_Åtti = " bg-primary-700/80 border border-primary-500"
    let Åttien_Nittini = " bg-yellow-600/50 border border-yellow-400/70"

    let userLevelStyle = En_Ti

    function userLevel() {
        if (level < 11) {
            return userLevelStyle = En_Ti
        }
        if (level < 10 && level > 26) {
            return userLevelStyle = Elve_Tjuefem
        }
        if (level > 25 && level < 56) {
            return userLevelStyle = Tjueseks_Femtifem
        }
        if (level > 55 && level < 81) {
            return userLevelStyle = Femtiseks_Åtti
        }
        if (level > 80 && level < 100) {
            return userLevelStyle = Åttien_Nittini
        }
    }

    userLevel()
</script>

{#if username === $user.username}
    <div class="grid grid-cols-[1fr_auto] gap-2 my-2 ml-4 mr-2">
        <div class="card rounded-xl py-2 px-4 rounded-tr-none space-y-1 border-surface-900 ">
            <header class="flex justify-between items-center">
                <div class=" flex items-center w-32">
                    <p class="font-bold mr-2">{username}</p>
                    <span class="flex mr-1 h-[1.2rem] aspect-square items-center justify-center rounded-md {userLevel()} text-[0.55rem] font-bold">{level}</span>
                </div>
                <span class="flex h-[1.1rem] items-center rounded-md border border-green-400/70 bg-green-400/30 px-1.5 pt-0.25 text-[0.525rem] font-bold text-black-400">DEG</span>
            </header>
            <p class=" text-sm break-all">{message}</p>
        </div>
        <Avatar initials={username} width="w-12" />
    </div>
{:else}
<div class="grid grid-cols-[1fr_auto] gap-2 my-2 ml-4 mr-2">
    <div class="card rounded-xl py-2 px-4 rounded-tr-none space-y-1 border-surface-900">
        <header class="flex justify-between items-center">
            <div class=" flex items-center">
                <p class="font-bold mr-2">{username}</p>
                <span class="flex h-[1.1rem] w-[1.1rem] mr-1 items-center justify-center rounded-md {userLevel()} px-1.5 pt-0.25 text-[0.525rem] font-bold text-black-400">{level}</span>
            </div>
            <small class="opacity-50"></small>
        </header>
        <p class="text-sm break-all">{message}</p>
    </div>
    <Avatar initials={username} width="w-12" />
</div>
{/if}