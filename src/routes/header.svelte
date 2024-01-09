<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    

    const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
					
					

</script>

<header class="flex justify-between w-[calc(100%-20.625rem)] h-24 items-center shadow-xl fixed top-0 left-0 z-50 bg-surface-800">
    <div class=" flex items-center justify-between">
        <a class=" h-10 w-10 flex items-center justify-center" href="/">
            <img class=" h-8 w-8" src="/home.svg" alt="home">
        </a>
        <div class=" h-8 border-r-2 border-primary-700"></div>
        <button class="btn variant-filled" use:popup={popupFeatured}>Show Popup</button>      
        <div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
            <div><p>Demo Content</p></div>
            <div class="arrow bg-surface-100-800-token" />
        </div>			
    </div>
    <div class=" flex items-center bg-surface-900 p-2 border border-primary-700 rounded-lg">
        <img class=" h-5" src="/Gold-Coin.png" alt="gold coin">
        <p class=" mr-3 ml-2 font-extrabold font-family-bakka text-sm">0.00</p>
        <span class="flex h-5.5 mr-1 items-center rounded-lg border border-surface-600 bg-surface-800 px-1.5 pt-0.25 text-[0.625rem] font-bold text-gray-400">COINS</span>
    </div>
    <Avatar initials="EK" background="bg-surface-600" />
</header>