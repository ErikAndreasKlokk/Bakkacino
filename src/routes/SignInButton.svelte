<script>
    import { openModal } from 'svelte-modals'
    import SignIn from './SignIn.svelte';
    import { Modals, closeModal } from 'svelte-modals'
  
    function handleClick() {
      openModal(SignIn)
    }
  </script>
  
  <button on:click="{handleClick}" class=" bg-primary-700/30 border border-primary-500 p-1 px-3 rounded-xl active:scale-95">Sign In</button>
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