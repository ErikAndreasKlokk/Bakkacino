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
	import ProfileButton from './profileButton.svelte';

    

    const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
    }

    const popupProfile: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupProfile',
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
                    if (data.coins) {
                        coins.set({
                            coins: data.coins
                        })
                    }
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
            <button class=" flex items-center justify-between p-2 text-surface-400 font-bold rounded-lg border border-transparent hover:border-primary-700/90" use:popup={popupFeatured}>Spill <span><img src="/expand.svg" alt="expand games"></span></button>
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
                <div class=" relative">
                    <Avatar initials={$user.username} background="bg-surface-600" />
                    <div use:popup={popupProfile} class=" absolute top-0 z-10 bg-transparent w-full h-full rounded-full border border-transparent hover:border-primary-700/90 cursor-pointer"></div>
                </div>
                <div class=" bg-surface-700 w-32 rounded-lg p-1" data-popup="popupProfile">
                    <ProfileButton />
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => SignOut()} class=" flex h-8 items-center cursor-pointer rounded-lg hover:bg-surface-500">
                        <div class=" flex w-1/3 justify-center items-center">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="tr-c h-[16px] w-auto fill-current"><g clip-path="url(#clip0_1_1278)"><path d="M9.9349 13.4248C9.9349 13.5989 9.86576 13.7658 9.74269 13.8888C9.61961 14.0119 9.45269 14.0811 9.27865 14.0811H3.09204C2.51208 14.0804 1.95606 13.8497 1.54596 13.4396C1.13587 13.0295 0.905192 12.4735 0.904541 11.8936V2.26855C0.905192 1.68859 1.13587 1.13257 1.54596 0.722478C1.95606 0.312383 2.51208 0.081706 3.09204 0.0810547L9.27865 0.0810547C9.45269 0.0810547 9.61961 0.150195 9.74269 0.273266C9.86576 0.396337 9.9349 0.563256 9.9349 0.737305C9.9349 0.911353 9.86576 1.07827 9.74269 1.20134C9.61961 1.32441 9.45269 1.39355 9.27865 1.39355H3.09204C2.86005 1.39381 2.63764 1.48608 2.4736 1.65012C2.30956 1.81416 2.21729 2.03657 2.21704 2.26855V11.8936C2.21729 12.1255 2.30955 12.348 2.47359 12.512C2.63764 12.676 2.86005 12.7683 3.09204 12.7686H9.27865C9.45269 12.7686 9.61961 12.8377 9.74269 12.9608C9.86576 13.0838 9.9349 13.2508 9.9349 13.4248ZM12.9031 6.61703L9.78456 3.49842C9.72387 3.43637 9.65148 3.38697 9.57157 3.35308C9.49165 3.3192 9.40582 3.30151 9.31902 3.30103C9.23222 3.30055 9.14619 3.31729 9.06591 3.35028C8.98563 3.38328 8.91269 3.43188 8.85132 3.49325C8.78995 3.55463 8.74136 3.62758 8.70837 3.70786C8.67539 3.78815 8.65865 3.87418 8.65915 3.96098C8.65964 4.04777 8.67734 4.13361 8.71123 4.21352C8.74513 4.29343 8.79453 4.36582 8.8566 4.4265L10.8548 6.4248H5.68858C5.51453 6.4248 5.34761 6.49395 5.22454 6.61702C5.10147 6.74009 5.03233 6.90701 5.03233 7.08105C5.03233 7.2551 5.10147 7.42202 5.22454 7.54509C5.34761 7.66816 5.51453 7.7373 5.68858 7.7373H10.8548L8.85649 9.73559C8.79528 9.79646 8.74668 9.86882 8.71348 9.94851C8.68028 10.0282 8.66313 10.1137 8.66301 10.2C8.66289 10.2863 8.67981 10.3718 8.71279 10.4516C8.74578 10.5314 8.79418 10.6039 8.85522 10.6649C8.91627 10.726 8.98876 10.7744 9.06854 10.8074C9.14832 10.8403 9.23382 10.8573 9.32015 10.8571C9.40648 10.857 9.49194 10.8399 9.57163 10.8067C9.65132 10.7735 9.72368 10.7249 9.78456 10.6637L12.9031 7.54511C13.0262 7.42204 13.0954 7.25512 13.0954 7.08107C13.0954 6.90702 13.0262 6.7401 12.9031 6.61703Z"></path></g><defs><clipPath id="clip0_1_1278"><rect width="14" height="14" fill="white" transform="translate(0 0.0810547)"></rect></clipPath></defs></svg>
                        </div>
                        <p class=" w-2/3 mr-4 text-sm font-bold">Log Out</p>
                    </div>
                </div>
            {:else}
                <div class=" flex h-9 w-[12rem]">
                    <SignUpButton />
                    <SignInButton />
                </div>
            {/if}
        </div>
    </div>
</header>