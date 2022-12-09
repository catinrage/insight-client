import { writable, get } from 'svelte/store';

import WindowComponent from '../../assets/components/window.svelte';

export default class Window {
  constructor(title, icon, width, height, menu = null) {
    this.properties = {
      title,
      icon,
      width,
      height,
    };
    this.component = WindowComponent;
    this.menu = menu;
    if (menu) this.menu.window = this;
    this.view = writable();
    this.loading = writable(false);
    this.loaded = writable(false);
    this.data = writable();
    this.unsubscribe = (e) => {};
  }
  async load(selectedItem, data) {
    if (selectedItem) {
      this.menu.selectedItem = selectedItem;
      this.data.set(data);
    }
    this.unsubscribe();
    const src = `../../views/${this.properties.title}/${
      this.menu === null ? 'index' : this.menu.selectedItem
    }.svelte?${new Date().getTime()}`;
    this.loading.set(true);
    this.loaded.set(false);
    this.menu.updateActiveItem();
    this.view.set((await import(src.toLocaleLowerCase())).default);
    this.unsubscribe = this.loaded.subscribe((value) => {
      if (!value) return;
      this.properties.setTitle(
        this.properties.title +
          '  ❱  ' +
          this.menu.selectedItem.replace('/', '  ❱  ')
      );
      this.loading.set(false);
      this.unsubscribe();
      this.data.set(null);
    });
  }
}
