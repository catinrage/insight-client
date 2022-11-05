import { writable, get } from 'svelte/store';

function store() {
  const dialog = writable({ showing: false, choice: null, final: true });
  return {
    ...dialog,
    show: ({ final = true, all = false } = { final: true, all: false }) => {
      dialog.set({
        showing: true,
        choice: null,
        final,
        all,
      });
      return new Promise((resolve, reject) => {
        dialog.subscribe((data) => {
          if (data.choice) resolve(data.choice);
        });
      });
    },
  };
}

export default store();
