import { writable } from 'svelte/store';

import login from '../widgets/login';
import storage from '../widgets/storage';

export default {
  widgets: { login, storage },
  runningWidgets: writable([]),

  run: (widget) => {
    widget.run();
  },
  kill: (widget) => {
    widget.kill();
  },
};
