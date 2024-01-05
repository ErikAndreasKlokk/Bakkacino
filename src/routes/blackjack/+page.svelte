<script>
	import Chat from './chat.svelte'
	import Header from './header.svelte'

</script>

<div class="flex flex-col h-screen w-screen">
    <div class="w-4/5 h-1/6 bg-blue-700">
        <Chat/>
    </div>
    <div class="flex items-center justify-between bg-primary-700 h-5/6 w-4/5">
        <div class="flex  h-5/6 w-1/5">

        </div>
        <div class="flex w-3/5 h-9/12 bg-primary-900">

        </div>
    </div>
</div>
    