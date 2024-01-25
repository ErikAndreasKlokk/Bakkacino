<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
    import { getModalStore } from '@skeletonlabs/skeleton';
    import { Modal } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';

    initializeStores();
			
    const modalStore = getModalStore();


    const modalJoin: ModalSettings = {
        type: 'confirm',
        // Data
        title: 'Join coinflip spill',
        body: 'Are you sure you wish to proceed?',
        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => console.log('response:', r),
    };
</script>

<Modal />
<div class=" w-full bg-surface-700 h-24 flex justify-center items-center border-b border-surface-400">
    <div class=" flex items-center justify-between w-[95%] h-5/6 hover:scale-[1.005] transition-all">
        <div class=" flex items-center">
            <Avatar class="border border-transparent hover:border-primary-700/90" initials="EK" background="bg-surface-600" />
            <p class=" font-bold text-base ml-2">Erik</p>
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