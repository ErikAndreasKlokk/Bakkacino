<script>
    import { openModal } from 'svelte-modals'
    import Profile from './profile.svelte';
    import { Modals, closeModal } from 'svelte-modals'
  
    function handleClick() {
      openModal(Profile)
    }
  </script>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class=" flex h-8 items-center rounded-lg hover:bg-surface-500 cursor-pointer" on:click="{handleClick}">
        <div class=" flex w-1/3 justify-center items-center">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="tr-c h-[16px] w-auto stroke-current"><path d="M8.60635 3.32714C8.60635 4.67733 7.45763 5.82323 5.97592 5.82323C4.49422 5.82323 3.34549 4.67733 3.34549 3.32714C3.34549 1.97697 4.49422 0.831055 5.97592 0.831055C7.45763 0.831055 8.60635 1.97697 8.60635 3.32714ZM0.75 10.1888C0.75 9.03407 1.73375 8.04659 3.01193 8.04659H8.98807C10.2663 8.04659 11.25 9.03407 11.25 10.1888C11.25 11.3436 10.2663 12.3311 8.98807 12.3311H3.01193C1.73374 12.3311 0.75 11.3436 0.75 10.1888Z" stroke-width="1.5"></path></svg>
        </div>
        <p class=" w-2/3 mr-4 font-bold text-sm">Profile</p>
    </div>
  <Modals>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      slot="backdrop"
      class="backdrop"
      on:click={closeModal}
    />
  </Modals>
  
  <style>
    .backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0,0,0,0.70)
    }
  </style>