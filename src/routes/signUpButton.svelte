<script>
    import { openModal } from 'svelte-modals'
    import SignUp from './SignUp.svelte';
    import { Modals, closeModal } from 'svelte-modals'
  
    function handleClick() {
      openModal(SignUp)
    }
  </script>
  
  <button on:click="{handleClick}" class=" bg-surface-700 border border-surface-500 p-1 px-3 rounded-xl active:scale-95">Sign Up</button>
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