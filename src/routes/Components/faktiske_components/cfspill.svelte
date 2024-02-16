<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import { user } from '../../../lib/stores/user';
    import Level from './level.svelte';
			
    const modalStore = getModalStore();

    export let usernamep1
    export let value
    export let levelp1
    export let usernamep2: string | null = 'herjus'
    export let levelp2: number | null = 1

    let truuee = true

    const modalJoin: ModalSettings = {
        type: 'component',
        component: 'joinCF'
        // Data
    };
</script>

<div class=" w-full bg-surface-700 h-24 flex justify-center items-center border-b border-surface-400">
    <div class=" flex items-center justify-between w-[95%] h-5/6 hover:scale-[1.005] transition-all">
        <div class=" flex items-center">
            <div class=" flex items-center bg-surface-800 px-5 py-2 rounded-lg">
                <Avatar class="border border-transparent hover:border-primary-700/90" initials={usernamep1} background="bg-surface-600" />
                <p class=" font-bold text-base mx-3">{usernamep1}</p>
                <Level level={levelp1} profile={false} small={false}/>
            </div>
            {#if truuee}
                <p class=" font-bold text-2xl mx-4">VS</p>
                <div class=" flex items-center bg-surface-800 px-5 py-2 rounded-lg">
                    <Avatar class="border border-transparent hover:border-primary-700/90" initials={usernamep2} background="bg-surface-600" />
                    <p class=" font-bold text-base mx-3">{usernamep2}</p>
                    <Level level={levelp2} profile={false} small={false}/>
                </div>
            {/if}
        </div>
        <div class=" flex items-center">
            <img class=" h-5" src="/Gold-Coin.png" alt="coin">
            <p class=" font-extrabold ">{value}</p>
        </div>
        <div>
            {#if $user.username}
                <button type="button" class="btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg ml-5" on:click={() => modalStore.trigger(modalJoin)}>Delta</button>
            {:else}
            <button type="button" disabled class="btn variant-filled !bg-primary-600 !text-surface-100 !rounded-lg ml-5">Delta</button>
            {/if}
        </div>
    </div>
</div>