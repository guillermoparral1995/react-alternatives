import { writable } from 'svelte/store';

export const state = writable({ contacts: [] });