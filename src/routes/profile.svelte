<script>
    import { closeModal } from 'svelte-modals'
    import { user } from '../lib/stores/user'

    // provided by Modals
    export let isOpen
</script>

{#if isOpen}
<div class=" top-0 right-0 fixed h-full w-screen flex flex-col justify-center items-center z-50">
    <div class=" bg-surface-800 p-6 rounded-lg h-[22rem]">
        <div class=" flex">
            <p>{$user.username}</p>
            <button on:click={() => closeModal()}>
                <img src="/expand.svg" alt="">
            </button>
        </div>
        <div></div>
    </div>
  </div>
{/if}