<script lang="ts">
    import { closeModal } from 'svelte-modals'
    import Cookies from 'js-cookie';
    import { user } from '../../../lib/stores/user';
    import { Toast, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
    import axios from 'axios'
    import { coins } from '../../../lib/stores/coins';
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { SvelteComponent } from 'svelte';

    const modalStore = getModalStore();

    export let parent: SvelteComponent;
  
    const toastStore = getToastStore();
              
  
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
            password: data.password,
            level: data.level
          })
          coins.set({
            coins: data.coins
          })
          console.log(data)
          modalStore.close();
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
    const cForm = 'border border-surface-500 p-4 space-y-4 h-[85%]';
  
    </script>
    
    {#if $modalStore[0]}
      <div class=" bg-surface-800 p-6 rounded-lg h-[22rem]">
        <header class={cHeader}>Sign In</header>
        <!-- Enable for debugging: -->
        <form on:submit={() => postSignIn()} class="modal-form {cForm} flex flex-col justify-between rounded-lg">
          <div>
            <div class="relative z-0 w-64 mb-5 group">
              <input bind:value={formData.email} type="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div class="relative z-0 w-64 mb-5 group">
              <input bind:value={formData.password} type="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
          </div>
          <input type="submit" class=" w-0 m-0 p-0 h-0 !mt-0">
            <div class=" flex justify-between">
                <button class=" bg-surface-600 border border-surface-400 rounded-lg p-1 px-3 active:scale-95" on:click="{parent.onClose}">Cancel</button>
                <input class=" cursor-pointer bg-primary-700/30 border border-primary-500 px-4 rounded-lg active:scale-95" type="submit" value="Sign In">
            </div>
        </form>
      </div>
    {/if}