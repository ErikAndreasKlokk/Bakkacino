<script lang="ts">
    import { closeModal } from 'svelte-modals'
    import Cookies from 'js-cookie';
	import { user } from '../lib/stores/user';
  import { Toast, getToastStore } from '@skeletonlabs/skeleton';
  import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
  import axios from 'axios'
	import { coins } from '../lib/stores/coins';

const toastStore = getToastStore();
			
  
    // provided by Modals
    export let isOpen

    const formData = {
		"email": '',
		"password": ''
	};

    async function postSignIn () {
    async function validate () {
      let token = Cookies.get("token")
      fetch("https://bakkacino.herjus.tech/auth/validate", {
        headers: {
        'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        user.set({
          username: data.username,
          email: data.email,
          password: data.password
        })
        coins.set({
          coins: data.coins
        })
        console.log(data)
        closeModal()
      }).catch(error => {
        console.log(error);
        return [];
      });
    }

    try {
      const response = await axios.post('https://bakkacino.herjus.tech/auth/sign-in', {
        email: formData.email,
        password: formData.password
      });
      Cookies.set('token', response.data.token, { secure: true }, { sameSite: 'strict' })
      validate()
    } catch (error) {
      console.error(error.response.data.detail);
      const t: ToastSettings = {
        message: error.response.data.detail,
      };
      toastStore.trigger(t);
    }
  }

    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	  const cHeader = 'text-2xl font-bold mb-4';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token h-[85%]';

  </script>
  
  {#if isOpen}
  <div class=" top-0 right-0 fixed h-full w-screen flex flex-col justify-center items-center py-96 z-50">
    <div class=" bg-surface-800 p-6 rounded-3xl h-96  ">
      <header class={cHeader}>Sign In</header>
      <!-- Enable for debugging: -->
      <form class="modal-form {cForm} flex flex-col justify-between">
        <div>
          <label class="label">
            <span>Email</span>
            <input class="input p-1 px-2" type="email" bind:value={formData.email} placeholder="Enter Email..." />
          </label>
          <label class="label mt-5">
            <span>Password</span>
            <input class="input p-1 px-2" type="text" bind:value={formData.password} placeholder="Enter Password..." />
          </label>
        </div>
          <div class=" flex justify-between">
              <button class=" bg-surface-600 border border-surface-400 rounded-xl p-1 px-3 active:scale-95" on:click="{closeModal}">Cancel</button>
              <input class=" cursor-pointer bg-primary-700/30 border border-primary-500 px-4 rounded-xl active:scale-95" type="submit" value="Sign In" on:click={() => postSignIn()}>
          </div>
      </form>
    </div>
  </div>
  {/if}
  
  