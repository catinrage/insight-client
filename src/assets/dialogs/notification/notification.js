import { writable, get } from 'svelte/store';

function store() {
  const notifications = writable([]);
  return {
    ...notifications,
    create: notification => {
      notification.id = Math.random().toString(16).slice(2);
      notifications.set([...get(notifications), notification]);
    },
    success: (message, icon = '') => {
      const notification = {
        type: 'success',
        message,
        icon
      };
      notification.id = Math.random().toString(16).slice(2);
      notifications.set([...get(notifications), notification]);
    },
    error: (message, icon = '') => {
      const notification = {
        type: 'error',
        message,
        icon
      };
      notification.id = Math.random().toString(16).slice(2);
      notifications.set([...get(notifications), notification]);
    },
    warning: (message, icon = '') => {
      const notification = {
        type: 'warning',
        message,
        icon
      };
      notification.id = Math.random().toString(16).slice(2);
      notifications.set([...get(notifications), notification]);
    },
    delete: id => {
      notifications.set(get(notifications).filter(n => n.id !== id));
    },
    clear: () => {
      notifications.set([]);
    }
  };
}

export default store();
