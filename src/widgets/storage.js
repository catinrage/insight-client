import Widget from '../core/interface/widget';
import Window from '../core/interface/window';
import Menu from '../core/interface/menu';

const StorageWindowMenu = new Menu('Categories/Explore');
StorageWindowMenu.insert('Categories', 'apps-outline')
  .insert('Explore', 'folder-open-outline')
  .insert('Fields', 'create-outline');
StorageWindowMenu.insert('Items', 'file-tray-stacked-outline')
  .insert('Explore', 'documents-outline')
  .insert('Relations', 'git-merge-outline')
  .insert('Controllers', 'browsers-outline');
StorageWindowMenu.insert('Repository', 'server-outline')
  .insert('Records', 'receipt-outline')
  .insert('Reports', 'stats-chart-outline');

const StorageWindow = new Window(
  'Storage',
  'apps-outline',
  '80rem',
  '40rem',
  StorageWindowMenu
);

export default new Widget('Login', 'apps-circle', StorageWindow, true);
