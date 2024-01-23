<script>
    import { Avatar } from '@skeletonlabs/skeleton';
    import { user } from '../lib/stores/user.js'

    export let username;
    export let message;
</script>

{#if username === $user.username}
    <div class="grid grid-cols-[1fr_auto] gap-2 my-2 ml-4 mr-2">
        <div class="card rounded-xl py-2 px-4 rounded-tr-none space-y-1 border-surface-900">
            <header class="flex justify-between items-center">
                <p class="font-bold">{username}</p>
                <small class="opacity-50"></small>
            </header>
            <p class=" text-sm">{message}</p>
        </div>
        <Avatar initials={username} width="w-12" />
    </div>
{:else}
    <div class="grid grid-cols-[auto_1fr] gap-2 my-2 mr-4 ml-2">
        <Avatar initials={username} width="w-12" />
        <div class="card rounded-xl py-2 px-4 rounded-tl-none space-y-1 border-surface-900">
            <header class="flex justify-between items-center">
                <p class="font-bold">{username}</p>
                <small class="opacity-50"></small>
            </header>
            <p class=" text-sm">{message}</p>
        </div>
    </div>
{/if}