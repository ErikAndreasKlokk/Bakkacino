<script>
    import { Avatar } from '@skeletonlabs/skeleton';
	import Message from './message.svelte';
</script>

<main class="flex h-screen w-[20.625rem] fixed top-0 right-0 z-50 bg-surface-900 flex-col border-l-4 border-surface-800" >
    <div class=" flex relative w-full flex-col items-center">
        <div class=" bg-surface-800 flex justify-center items-center h-40 border-b-8 border-surface-900 w-full">
            <img class=" h-28" src="/bakkacino.png" alt="logo bakkacino">
        </div>
        <div class=" flex flex-col bg-surface-800 w-[18rem] justify-center rounded-md border border-primary-700">
            <div class=" flex justify-between items-center p-2">
                <p class=" text-2xl font-black text-primary-600 items-center">COINDROP!</p>
                <div class=" bg-gradient-to-r from-primary-900 to-primary-700 w-16 flex justify-center items-center text-surface-50 font-bold tracking-widest border-2 border-primary-600 rounded-md text-xs">
                    <img class=" h-4" src="/clock.svg" alt="klokke">
                    <div class=" w-4/6 flex justify-center" id="safeTimerDisplay">5:00</div>
                </div>
            </div>
            <div class=" p-2">
                <div>
                    <img class=" h-14" src="/Gold_Coins.png" alt="coins">
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <p></p>
                    <button></button>
                </div>
            </div>
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