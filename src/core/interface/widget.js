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
  run(selectedItem) {
    if (
      !this.onlyOneInstance ||
      !get(widgetManager.runningWidgets).includes(this)
    ) {
      widgetManager.runningWidgets.update((current) => [...current, this]);
    }
    if (selectedItem) this.window.menu.selectedItem = selectedItem;
    this.window.load();
    return this.window;
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
