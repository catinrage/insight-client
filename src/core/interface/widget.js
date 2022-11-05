import { get } from 'svelte/store';

import widgetManager from '../providers/widgetManager';

export default class Widget {
  constructor(name, icon, window, onlyOneInstance = false) {
    this.id = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10);
    this.name = name;
    this.icon = icon;
    this.onlyOneInstance = onlyOneInstance;
    this.window = window;
  }
  run() {
    if (
      !this.onlyOneInstance ||
      !get(widgetManager.runningWidgets).includes(this)
    ) {
      widgetManager.runningWidgets.update((current) => [...current, this]);
    }
    this.window.load();
    return this;
  }
  kill(self) {
    return () => {
      widgetManager.runningWidgets.update((current) => {
        return current.filter((widget) => {
          return widget.id !== self.id;
        });
      });
    };
  }
}
