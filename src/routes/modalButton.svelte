<script>
    import { openModal } from 'svelte-modals'
    import Modal2 from './modal2.svelte';
    import { Modals, closeModal } from 'svelte-modals'
  
    function handleClick() {
      openModal(Modal2)
    }
  </script>
  
  <button on:click="{handleClick}">Log In</button>
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
      background: rgba(0,0,0,0.50)
    }
  </style>