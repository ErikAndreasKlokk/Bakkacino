<script>
	import Chat from '../chat.svelte'
	import Header from '../header.svelte'
</script>

<div class="flex justify-between h-screen w-screen">
    <div class="flex flex-col h-screen w-4/5">
        <Header/>
        <div class=" h-1/6"></div>
        <div class="flex items-center justify-between bg-primary-700 h-5/6 w-full">
            <div class="flex  h-full w-1/3">

            </div>
            <div class="flex bg-primary-900 h-[92%] w-[58%] mr-[2.1%]">
                
            </div>
        </div>
    </div>
     <Chat/>
</div>
    