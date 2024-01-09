<script>
	import Chat from './chat.svelte'
	import Header from './header.svelte'
	import { onMount } from 'svelte';

	onMount(() => {


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


		var time = 3600 / 2; // your time in seconds here
		let display = document.querySelector('#safeTimerDisplay');
		startTimer(time, display);
	})


</script>

<main class=" w-screen h-screen flex justify-between">
	<div class=" w-4/5 h-screen">
		<Header />
		<div class=" p-10">
			<div class=" flex w-full max-h-1/6 justify-between items-center p-5 border-primary-500 border-2 rounded-3xl bg-gradient-to-r from-transparent to-primary-900">
				<div class=" flex w-1/2 justify-between">
					<div class=" flex items-center mr-2"><img class=" w-40" src="/CoinDrops.png" alt="Coindrops logo"></div>
					<div class=" w-4/5 flex flex-col ml-3">
						<div class=" bg-gradient-to-r from-primary-900 to-primary-700 w-24 flex justify-center items-center text-surface-50 font-extrabold tracking-widest border-2 border-primary-600 rounded-md mb-2">
							<img class=" mr-2 " src="/clock.svg" alt="klokke">
							<div class=" w-4/6" id="safeTimerDisplay"></div>
						</div>
						<div class=" text-xs">Coindrop's skjer hvert <span class=" font-extrabold text-gray-50">30. minutt</span> og gir alle som deltar en del av pengene i <span class=" font-extrabold text-primary-500">Coindrop's potten</span>.</div>
					</div>
				</div>
				<div class=" flex">
					<img src="" alt="">
					<p class=" text-3xl">11.00</p>
				</div>
			</div>
			<div class=" flex flex-col mt-10">
				<div>
					<p class=" font-extrabold text-xl">Bakkacino Orginaler</p>
				</div>
				<div class=" flex mt-3" >
					<a href="/blackjack" class=" relative h-52 w-52 bg-primary-900 cursor-pointer border-2 border-primary-500 rounded-lg overflow-hidden">
						<img src="/blackjack.png" alt="blackjack">
						<div class=" flex justify-center items-center absolute bottom-0 w-full h-1/4 bg-surface-700 z-10">
							<p>Blackjack</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
	<Chat />
</main> 