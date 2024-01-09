<script>
	import Chat from '../chat.svelte'
	import Header from '../header.svelte'
</script>

<div class="flex justify-between h-screen w-screen">
    <div class="flex flex-col items-center h-screen w-[calc(100%-20.625rem)]">
        <Header/>
        <div class=" min-h-32"></div>
        <div class="flex items-center justify-between bg-primary-700 h-5/6 w-full max-w-[1200px]">
            <div class="flex  h-full w-1/3">

            </div>
            <div class="flex bg-primary-900 h-[92%] w-[58%] mr-[2.1%]">
                
            </div>
        </div>
    </div>
     <Chat/>
</div>
    