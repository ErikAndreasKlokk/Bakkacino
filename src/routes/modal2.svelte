<script>
    import { closeModal } from 'svelte-modals'
    import Cookies from 'js-cookie';
  
    // provided by Modals
    export let isOpen

    const formData = {
		"email": '',
		"password": ''
	};

    function setCookie(token) {
        let tokenCorrect = token.slice(9)
        tokenCorrect = tokenCorrect.slice(1, -2)
        Cookies.set('token', tokenCorrect)
    }

    async function postSignIn () {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(formData);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
            };

            await fetch("https://bakkacino.herjus.tech/auth/sign-in\n", requestOptions)
            .then(response => response.text())
            .then(result => setCookie(result))
            .catch(error => console.log('error', error));

            let token = Cookies.get("token")
            async function validate () {
                fetch("https://bakkacino.herjus.tech/auth/validate", {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                        console.log(data);
                }).catch(error => {
                    console.log(error);
                    return [];
                });
            }
            validate()
            showModal = false
        }

    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	  const cHeader = 'text-2xl font-bold mb-4';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

  </script>
  
  {#if isOpen}
  <div class=" top-0 right-0 fixed h-full w-screen flex flex-col justify-center items-center py-96 z-50">
    <div class=" bg-surface-800 p-6 rounded-3xl h-96  ">
      <header class={cHeader}>Sign In</header>
      <!-- Enable for debugging: -->
      <form class="modal-form {cForm}">
        <label class="label">
          <span>Email</span>
          <input class="input p-1 px-2" type="email" bind:value={formData.email} placeholder="Enter Email..." />
        </label>
        <label class="label">
          <span>Password</span>
          <input class="input p-1 px-2" type="text" bind:value={formData.password} placeholder="Enter Password..." />
        </label>
          <div class=" flex justify-between">
              <button on:click="{closeModal}">OK</button>
              <input class=" cursor-pointer" type="submit" value="Log In" on:click={() => postSignIn()}>
          </div>
      </form>
    </div>
  </div>
  {/if}
  
  