<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ModalComponent, ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import Chat from './Components/main/chat.svelte'
	import Header from './Components/main/header.svelte';
	import {Modal} from '@skeletonlabs/skeleton';
	import Joincf from './Components/modals/joincf.svelte';

	const modalRegistry: Record<string, ModalComponent> = {
		joinCF: { ref: Joincf}
		
	}
			

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal components={modalRegistry} />
<Toast />
<Header />
<slot />
<Chat />