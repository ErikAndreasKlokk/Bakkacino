<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
	import SignInButton from './SignInButton.svelte';
	import SignUpButton from './signUpButton.svelte';
    import { user } from '../lib/stores/user.js'
    import Cookies from 'js-cookie';
    import { coins } from '../lib/stores/coins.js'
    import { validate } from '../lib/stores/validation.js'

    

    const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
    }


    user.subscribe(() => {
        if ($user.username) {
            $validate.validation = true
        }
        else $validate.validation = false
    })
    
    let userCoins = 0

    coins.subscribe(() => {
        userCoins = $coins.coins
    })
 
    onMount(() => {
        let token = Cookies.get("token")
        async function validate () {
            fetch("https://bakkacino.herjus.tech/auth/validate", {
                headers: {
                   'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                    user.set({
                        username: data.username,
                        email: data.email,
                        password: data.password
                    })
                    coins.set({
                        coins: data.coins
                    })
            }).catch(error => {
                console.log(error);
                return [];
            });
        }
        validate()
    })

    function SignOut() {
        Cookies.remove('token', { path: '' })
        user.set({
          username: '',
          email: '',
          password: ''
        })
        coins.set({
            coins: 0
        })
    }

</script>

<header class="flex justify-between w-[calc(100%-20.625rem)] h-24 items-center shadow-xl fixed top-0 left-0 z-50 bg-surface-800 px-10">
    <div class=" flex items-center justify-between w-full">
        <div class=" flex flex-1 items-center">
            <a class=" h-12 w-12 flex items-center justify-center rounded-lg border border-transparent hover:border-primary-700/90" href="/">
                <img class=" h-8 w-8" src="/home.svg" alt="home">
            </a>
            <div class=" h-8 border-r-2 border-primary-700 mx-5"></div>
            <button class=" flex items-center justify-between p-2 text-surface-400 font-bold rounded-lg border border-transparent hover:border-primary-700/90" use:popup={popupFeatured}>Games <span><img src="/expand.svg" alt="expand games"></span></button>
            <div class="" data-popup="popupFeatured">
                <div class=" flex mt-3 bg-surface-800 rounded-lg" >
                    <a href="/blackjack" class=" relative h-fit w-56 cursor-pointer rounded-lg overflow-hidden m-3 border border-surface-500 hover:border-primary-700/90">
                        <img src="/BlackjackHowl.png" alt="blackjack">
                        <div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
                            <p class=" font-extrabold tracking-wider text-lg">Blackjack</p>
                        </div>
                    </a>
                    <a href="/coinflip" class=" relative h-fit w-56 cursor-pointer rounded-lg overflow-hidden m-3 border border-surface-500 hover:border-primary-700/90">
                        <img src="/CoinflipHowl.png" alt="blackjack">
                        <div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
                            <p class=" font-extrabold tracking-wider text-lg">Coinflip</p>
                        </div>
                    </a>
                    <a href="/" class=" relative h-fit w-56 cursor-pointer rounded-lg overflow-hidden m-3 border border-surface-500 hover:border-primary-700/90">
                        <img src="/ThewheelHowl.png" alt="blackjack">
                        <div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
                            <p class=" font-extrabold tracking-wider text-lg">Work in progress</p>
                        </div>
                    </a>
                    <a href="/" class=" relative h-fit w-56 cursor-pointer rounded-lg overflow-hidden m-3 border border-surface-500 hover:border-primary-700/90">
                        <img src="/JackpotHowl.png" alt="blackjack">
                        <div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
                            <p class=" font-extrabold tracking-wider text-lg">Work in progress</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class=" flex flex-1 justify-center">
            <div class=" flex items-center bg-surface-900 p-2 border border-primary-700 rounded-lg">
                <img class=" h-5" src="/Gold-Coin.png" alt="gold coin">
                <p class=" mr-3 ml-2 font-black font-family-bakka text-sm">{userCoins}</p>
                <span class="flex h-5.5 mr-1 items-center rounded-lg border border-surface-600 bg-surface-800 px-1.5 pt-0.25 text-[0.625rem] font-bold text-gray-400">COINS</span>
            </div>
        </div>
        <div class=" flex flex-1 justify-end">
            {#if $validate.validation}
                <Avatar on:click={() => SignOut()} class="border border-transparent hover:border-primary-700/90 cursor-pointer" initials={$user.username} background="bg-surface-600" />
            {:else}
                <div>
                    <SignUpButton />
                    <SignInButton />
                </div>
            {/if}
        </div>
    </div>
</header>