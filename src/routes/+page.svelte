<script>
	import { fade } from 'svelte/transition';
	import Header from './header.svelte'
	import { onMount } from 'svelte';
	import Spiltespill from './spiltespill.svelte';

	let onload = false

	onMount(() => {
		onload = true

		function startTimer(duration, display) {
			var timer = duration, minutes, seconds;
			setInterval(function () {
				minutes = parseInt(timer / 60, 10)
				seconds = parseInt(timer % 60, 10);

				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;

				display.innerHTML = minutes + ":" + seconds;

				if (--timer < 0) {
					timer = 0;
					// timer = duration; // uncomment this line to reset timer automatically after reaching 0
				}
			}, 1000);
		}

		

		setTimeout(() => {
			var time = 3600 / 2; // your time in seconds here
			let display = document.querySelector('#safeTimerDisplay');
			startTimer(time, display);
		})
	})

	function arrayMedSistSpilteSpillFunc() {
		let betaSpill = ''
		let arrayMedSistSpilteSpill = []
		while (arrayMedSistSpilteSpill.length < 10) {
			arrayMedSistSpilteSpill.push(betaSpill)
		}
		return arrayMedSistSpilteSpill
	}

	let arrayting = arrayMedSistSpilteSpillFunc()

</script>

<main class=" w-screen h-screen flex justify-between overflow-x-hidden font-sans bg-gradient-to-b from-transparent via-primary-900/20 to-transparent">
	<div class=" w-[calc(100%-20.625rem)] h-screen relative flex flex-col items-center">
		<Header />
		<div class=" min-h-32 w-full"></div>
		{#if onload}
		<div class=" p-10 max-w-[1200px]" in:fade={{ duration: 1000 }}>
			<div class=" flex w-full justify-between items-center p-5 border-primary-600 [border-width:_1px;] rounded-3xl bg-gradient-to-r from-transparent to-primary-500/20">
				<div class=" flex w-1/2 justify-between">
					<div class=" flex items-center mr-2"><img class=" w-40" src="/CoinDrops.png" alt="Coindrops logo"></div>
					<div class=" w-4/5 flex flex-col ml-3">
						<div class=" bg-gradient-to-r from-primary-900 to-primary-700 w-24 flex justify-center items-center text-surface-50 font-bold tracking-widest border-2 border-primary-600 rounded-md mb-2 text-sm">
							<img class="" src="/clock.svg" alt="klokke">
							<div class=" w-4/6 flex justify-center" id="safeTimerDisplay"></div>
						</div>
						<div class=" text-xs font-semibold">Coindrops skjer hvert <span class=" font-extrabold text-gray-50">30. minutt</span> og gir alle som deltar en del av pengene i <span class=" font-extrabold text-primary-500">Coindrop's potten</span>.</div>
					</div>
				</div>
				<div class=" flex shadow-2xl bg-surface-800 w-72 h-20 justify-between items-center rounded-lg">
					<img class=" ml-7 h-14" src="/Gold_Coins.png" alt="">
					<div class=" flex justify-center items-center mr-4">
						<p class=" font-extrabold text-4xl [letter-spacing:_0.6rem;] [text-shadow:_0_2px_0_rgb(0_0_0_/_50%)] ">11.00</p>
					</div>
				</div>
			</div>
			<div class=" flex flex-col mt-10 mb-10">
				<div>
					<p class=" font-extrabold text-xl">Bakkacino Orginaler</p>
				</div>
				<div class=" flex mt-3 w-full justify-around" >
					<a href="/blackjack" class=" relative h-fit w-64 cursor-pointer rounded-lg overflow-hidden">
						<img src="/BlackjackHowl.png" alt="blackjack">
						<div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
							<p class=" font-extrabold tracking-wide text-lg">Blackjack</p>
						</div>
					</a>
					<a href="/coinflip" class=" relative h-fit w-64 cursor-pointer rounded-lg overflow-hidden">
						<img src="/CoinflipHowl.png" alt="blackjack">
						<div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
							<p class=" font-extrabold tracking-wide text-lg">Coinflip</p>
						</div>
					</a>
					<a href="/" class=" relative h-fit w-64 cursor-pointer rounded-lg overflow-hidden">
						<img src="/ThewheelHowl.png" alt="blackjack">
						<div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
							<p class=" font-extrabold tracking-wide text-lg">Work in progress</p>
						</div>
					</a>
					<a href="/" class=" relative h-fit w-64 cursor-pointer rounded-lg overflow-hidden">
						<img src="/JackpotHowl.png" alt="blackjack">
						<div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-800/60 z-10">
							<p class=" font-extrabold tracking-wide text-lg">Work in progress</p>
						</div>
					</a>
				</div>
			</div>
			<div class=" flex flex-col items-center w-full bg-neutral-900 rounded-xl border-[0.5px] border-surface-500 pb-10">
				<div class=" h-10 flex items-center border-b-2 border-primary-500 mt-2">
					<p class=" font-extrabold tracking-tight text-1xl">De siste spillene</p>
				</div>
				<div class=" w-full px-8 mt-3"> <!-- Div med alle de siste spille som man skal legge inn i -->
					<div class=" flex h-10 pb-2 items-end justify-between w-full border-b border-surface-400">
						<div class=" w-[30%] text-surface-300 font-extrabold text-sm">
							<p>Spill</p>
						</div>
						<div class=" w-[30%] text-surface-300 font-extrabold text-sm">
							<p>Bruker</p>
						</div>
						<div class=" flex w-[40%] justify-between text-surface-300 font-extrabold text-sm">
							<p>Mengde</p>
							<p>Multiplikator</p>
							<p>Payout</p>
						</div>
					</div>
					<!-- Her er de forksjellige spillene spillere har spilt -->
					<div id="DIV_MED_SPILL" class=" relative">
						<div class=" absolute h-full w-full bg-gradient-to-b from-transparent to-neutral-900 to-[99%] z-10"></div>
						{#each arrayting as div, i}
							<Spiltespill />
						{/each}
					</div>
				</div>
			</div>
		</div>
		{/if}
	</div>
</main> 