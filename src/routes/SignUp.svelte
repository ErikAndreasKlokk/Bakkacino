<script>
	import Modal from './Modal.svelte';

    export let logInUp;

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
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }

    const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
    const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

	let showModal = false;
</script>

<button on:click={() => (showModal = true)}>{logInUp}</button>

<Modal bind:showModal>
		<header class={cHeader}>Sign In</header>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<label class="label">
				<span>Username</span>
				<input class="input p-1 px-2" type="text" bind:value={formData.username} placeholder="Enter Username..." />
			</label>
			<label class="label">
				<span>Email</span>
				<input class="input p-1 px-2" type="email" bind:value={formData.email} placeholder="Enter Email..." />
			</label>
			<label class="label">
				<span>Password</span>
				<input class="input p-1 px-2" type="text" bind:value={formData.password} placeholder="Enter Password..." />
			</label>
            <input type="submit" value="Sign Up" on:click={() => postSignUp()}>
		</form>
</Modal>