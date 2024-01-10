<script>
    import { Avatar } from '@skeletonlabs/skeleton';
	import Message from './message.svelte';
</script>

<main class="flex h-screen w-[20.625rem] fixed top-0 right-0 z-50 bg-surface-900 flex-col border-l-4 border-surface-800 " >
    <div class=" relative">
        <div class=" bg-surface-800 flex justify-center items-center h-40 border-b-8 border-surface-900">
            <img class=" h-28" src="/bakkacino.png" alt="logo bakkacino">
        </div>
        <div class="">

        </div>
    </div>
    <div class=" h-full overflow-scroll flex flex-col-reverse">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
    <div class=" h-24 flex items-center justify-center">
        <input class=" h-4/6 w-5/6 bg-surface-800 border border-surface-400 rounded-md text-surface-100 text-sm px-2" placeholder="Write your message here..." type="text">
    </div>
</main>