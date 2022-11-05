import { writable, get } from 'svelte/store';

function store() {
  const prompt = writable({ showing: false, choice: false });
  return {
    ...prompt,
    show: ({ message, options, safe = false, input = false, icon = '' }) => {
      prompt.set({
        message: '',
        options: [],
        safe: false,
        input: false,
      });
      prompt.set({
        showing: true,
        choice: false,
        message,
        options,
        icon,
        safe,
        input,
      });
      return new Promise((resolve, reject) => {
        prompt.subscribe((data) => {
          if (data.choice) resolve(data.choice);
        });
      });
    },
  };
}

export default store();
