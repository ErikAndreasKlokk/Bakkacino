<script>
    import { closeModal } from 'svelte-modals'
    import { user } from '../lib/stores/user'
    import { Avatar } from '@skeletonlabs/skeleton';

    // provided by Modals
    export let isOpen
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
        <div>
            
        </div>
    </div>
  </div>
{/if}