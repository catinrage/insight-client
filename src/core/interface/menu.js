class Item {
  constructor(menu, title, icon, path = '') {
    this.menu = menu;
    this.title = title;
    this.icon = icon;
    this.path = path;
    this.active = this.menu.selectedItem === this.path;
    this.open = false;
    this.subItems = [];
  }
  insert(title, icon) {
    this.subItems.push(
      new Item(this.menu, title, icon, this.path + '/' + title)
    );
    return this;
  }
  onClick() {
    if (this.subItems.length) {
      this.open = !this.open;
    } else {
      for (const item of this.menu.items) {
        item.active = false;
        for (const subItem of item.subItems) {
          subItem.active = false;
        }
      }
      this.active = true;
      this.menu.selectedItem =
        this.path.at(-1) === '/' ? this.path.slice(0, -1) : this.path;
      this.menu.window.load();
    }
  }
}

export default class Menu {
  constructor(selectedItem) {
    this.selectedItem = selectedItem;
    this.items = [];
  }
  insert(title, icon) {
    this.items.push(new Item(this, title, icon, title));
    return this.items.at(-1);
  }
}
