import { writable } from 'svelte/store';

export const user = writable({
  username: '',
  email: '',
  password: '',
  level: Number
});