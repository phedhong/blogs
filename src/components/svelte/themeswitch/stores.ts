import { writable } from "svelte/store";

type theme = 'dark' | 'light'




export const themeStores = writable<theme>('dark')

