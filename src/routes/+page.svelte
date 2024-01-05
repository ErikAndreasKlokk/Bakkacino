<script>
	import Chat from './chat.svelte'
	import Header from './header.svelte'

</script>

<main class=" w-screen h-screen flex justify-between">
	<div class=" w-4/5 h-screen">
		<Header />
		<div class=" p-10">
			<div class=" flex w-full max-h-1/6 justify-between items-center p-5 bg-primary-900 border-primary-500 border-2 rounded-3xl">
				<div class=" flex w-1/2 justify-between">
					<div class=" flex items-center">Coindrop</div>
					<div class=" w-4/5">
						<div>Timer</div>
						<div>Coindrop's skjer hvert 30'ende minutt og gir alle som deltar en del av pengene i Coindrop's potten.</div>
					</div>
				</div>
				<div class=" flex">
					<img src="" alt="">
					<p class=" text-3xl">11.00</p>
				</div>
			</div>
			<div class=" flex flex-col mt-10">
				<div>
					<p class=" font-extrabold text-xl">Games</p>
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