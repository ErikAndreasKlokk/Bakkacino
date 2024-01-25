<script>
	import Message from './message.svelte';
    import { validate } from '../lib/stores/validation.js'
    import { onMount } from 'svelte';
    import Cookies from 'js-cookie';


    let ws;
    let messages = [];

    onMount(() => {
        validate.subscribe(() => {
            if ($validate.validation) {
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws.close()
                }
                ws = new WebSocket(`wss://bakkacino.herjus.tech/chat/${Cookies.get("token")}`)
            } else {
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws.close()
                }
                ws = new WebSocket("wss://bakkacino.herjus.tech/chat")
            }
            ws.onopen = function(event) {
            }
            ws.onmessage = function(event) {
                const data = JSON.parse(event.data)
                messages = [data, ...messages]
            };
        })
    })

    let message_field;

    function sendMessage(e) {
        e.preventDefault();
        ws.send(message_field)
        message_field = "";

        if (messages.length > 50) {
            messages.pop()
        }
    }
</script>

<main class="flex h-screen w-[20.625rem] fixed top-0 right-0 z-30 bg-surface-900 flex-col border-l-4 border-surface-800" >
    <div class=" flex relative w-full flex-col items-center">
        <div class=" bg-surface-800 flex justify-center items-center h-40 border-b-8 border-surface-900 w-full">
            <img class=" h-28" src="/bakkacino.png" alt="logo bakkacino">
        </div>
        <div class=" flex flex-col bg-gradient-to-bl from-surface-800 to-primary-900/30 w-[18.7rem] rounded-md border border-primary-700"> <!-- coindrop -->
            <div class=" flex justify-between items-center pt-1 px-4">
                <p class=" text-3xl font-black bg-gradient-to-br from-primary-600 to-primary-400 bg-clip-text text-transparent box-decoration-clone items-center">COINDROP!</p>
                <div class=" bg-gradient-to-r from-primary-900/50 to-primary-700/50 w-16 flex justify-center items-center text-surface-50 font-bold tracking-widest border-2 border-primary-600/50 rounded-md text-xs">
                    <img class=" h-4 pt-[1px] w-4" src="/clock.svg" alt="klokke">
                    <div class=" w-4/6 flex justify-center font-extrabold tracking-wide" id="safeTimerDisplay">5:00</div>
                </div>
            </div>
            <div class=" py-2 px-4 flex justify-between">
                <div class=" flex items-center bg-gradient-to-l from-transparent to-surface-200/10 pl-2 py-2 rounded-lg">
                    <img class=" h-14" src="/Gold_Coins.png" alt="coins">
                    <div class=" flex flex-col items-center">
                        <p class=" text-xs text-surface-400 font-bold">coindrops verdi</p>
                        <p class=" text-lg font-extrabold">20.00</p>
                    </div>
                </div>
                <div class=" flex flex-col items-center justify-evenly h-full">
                    <p class=" font-extrabold text-sm tracking-wide">30 <span class=" text-surface-400 text-xs tracking-normal font-bold">Deltat</span></p>
                    <button class=" bg-primary-600/50 border border-primary-600 px-5 rounded-md font-bold ">Delta</button>
                </div>
            </div>
        </div>
    </div>
    <div class=" h-full overflow-scroll flex flex-col-reverse">
        {#each messages as message}
            <Message username={message.user} message={message.value} level={message.level}/>
        {/each}
    </div>
    <form on:submit={sendMessage} class=" h-24 flex items-center justify-center">
        <input bind:value={message_field} disabled={!$validate.validation} class=" disabled:cursor-not-allowed h-4/6 w-5/6 bg-surface-800 border border-surface-400 rounded-md text-surface-100 text-sm px-2" placeholder={$validate.validation ? 'Write your message here...' : 'Log In to type a message...'} type="text">
    </form>
</main>
