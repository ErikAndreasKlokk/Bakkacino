<script>
    import { openModal } from 'svelte-modals'
    import { Modals, closeModal } from 'svelte-modals'
	import Lagcf from './lagcf.svelte';
  
    function handleClick() {
      openModal(Lagcf)
    }
  </script>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class=" flex h-8 items-center rounded-lg bg-primary-600 cursor-pointer justify-center p-5 ml-6" on:click="{handleClick}">
        <p class="">Lag nytt spill</p>
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