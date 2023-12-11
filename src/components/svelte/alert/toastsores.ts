// import { writable } from "svelte/store";
// import { getContext, setContext } from 'svelte';

// interface ITOAST {
//   id?: number,
//   name: string;
//   done: boolean;
//   count: number;
// }

// const TOAST = { message: '(TOAST MESSAGE)', autohide: true, timeout: 5000 }
// const TOAST_STORE_KEY = 'toastStore';

// export const getToastStore = () => {
//   const toastSotre = getContext(TOAST_STORE_KEY)

//   if (!toastSotre) throw new Error(`toast store is not init`)

//   return toastSotre
// }

// export const initToastStore = () => {
//   const toastStore = toastService();

//   return setContext(TOAST_STORE_KEY, toastStore)
// }

// // Note for security; differentiates the queued toasts
// function randomUUID(): string {
//   const random = Math.random();
//   return Number(random).toString(32);
// }

// export type ToastStore = ReturnType<typeof toastService>;

// function toastService() {
//   const { subscribe, set, update } = writable<Toast[]>([]);

//   const close = (id: string) => update((tStore) => {
//     if (tStore > 0) {
//       const idx = tStore.findIndex((t) => t.id === id);
//       const selectedToast = tStore[idx];
//       if (selectedToast) {
//         if (selectedToast.callback) selectedToast.callback({ id, status: 'closed' });
//         if (selectedToast.timeoutId) clearTimeout(selectedToast.timeoutId);

//         tStore.splice(idx, 1);
//       }
//     }
//     return tStore
//   });

//   const handleAutoHide = (toast) => {
//     if (toast.autohide === true) {
//       return setTimeout(() => { close(toast.id); }, toast.timeout);
//     }
//   }

//   return {
//     subscribe,
//     close,
//     /** Add a new toast to the queue. */
//     trigger: (toast) => {
//       const id: string = randomUUID();
//       update((tStore) => {
//         // Trigger Callback
//         if (toast && toast.callback) toast.callback({ id, status: 'quequed' });

//         // Active autohiden
//         if (toast.hideDismiss) toast.autohide = true;
//         const tMerged = { ...toastDefaults, ...toast, id };
//         // const tMerged: Toast = { ...toastDefaults, ...toast, id };
//         // Handle auto-hide, if needed
//         tMerged.timeoutId = handleAutoHide(tMerged);
//         // Push into store
//         tStore.push(tMerged);
//         // Return
//         return tStore;

//       });
//       return id;
//     },

//     freeze: (idx: number) => update((tStore) => {
//       if (tStore.length > 0) clearTimeout(tStore[idx].timeoutId);
//       return tStore;
//     }),

//     unfreeze: (idx: number) => update((tStore) => {
//       if (tStore.length > 0) tStore[idx].timeoutId = handleAutoHide(tStore[idx]);
//       return tStore;

//     }),
//     clear: () => set([])

//   };
// }
