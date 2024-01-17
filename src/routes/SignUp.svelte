<script>
    import { closeModal } from 'svelte-modals'
  
    // provided by Modals
    export let isOpen

    const formData = {
		"username": '',
		"email": '',
		"password": ''
	};

    async function postSignUp () {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(formData);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
            };

            await fetch("https://bakkacino.herjus.tech/auth/sign-up\n", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold mb-4';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token h-[85%]';

  </script>
  
  {#if isOpen}
  <div class=" top-0 right-0 fixed h-full w-screen flex flex-col justify-center items-center py-96 z-50">
    <div class=" bg-surface-800 p-6 rounded-3xl h-96  ">
      <header class={cHeader}>Sign Up</header>
      <!-- Enable for debugging: -->
      <form class="modal-form {cForm} flex flex-col justify-between">
        <div>
          <label class="label">
            <span>Username</span>
            <input class="input p-1 px-2" type="text" bind:value={formData.username} placeholder="Enter Username..." />
          </label>
          <label class="label mt-2">
            <span>Email</span>
            <input class="input p-1 px-2 " type="email" bind:value={formData.email} placeholder="Enter Email..." />
          </label>
          <label class="label mt-2">
            <span>Password</span>
            <input class="input p-1 px-2" type="text" bind:value={formData.password} placeholder="Enter Password..." />
          </label>
        </div>
          <div class=" flex justify-between">
              <button class=" bg-surface-600 border border-surface-400 rounded-xl p-1 px-3 active:scale-95" on:click="{closeModal}">Cancel</button>
              <input class=" cursor-pointer bg-primary-700/30 border border-primary-500 px-4 rounded-xl active:scale-95" type="submit" value="Sign Up" on:click={() => postSignUp()}>
          </div>
      </form>
    </div>
  </div>
  {/if}
  
  