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
  }
  async load() {
    const src = `../../views/${this.properties.title}/${
      this.menu === null ? 'index' : this.menu.selectedItem
    }.svelte?${new Date().getTime()}`;
    this.view.set((await import(src.toLocaleLowerCase())).default);
    this.properties.setTitle(
      this.properties.title +
        '  ❱  ' +
        this.menu.selectedItem.replace('/', '  ❱  ')
    );
  }
}
