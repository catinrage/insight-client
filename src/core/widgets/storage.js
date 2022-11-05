import Widget from '../interface/widget';
import Window from '../interface/window';
import Menu from '../interface/menu';

const StorageWindowMenu = new Menu('Items/Explore');
StorageWindowMenu.insert('Categories', 'apps-outline')
  .insert('Explore', 'folder-open-outline')
  .insert('Fields', 'create-outline');
StorageWindowMenu.insert('Items', 'file-tray-stacked-outline')
  .insert('Explore', 'documents-outline')
  .insert('Relations', 'git-merge-outline')
  .insert('Controllers', 'browsers-outline');
StorageWindowMenu.insert('Repository', 'server-outline')
  .insert('Records', 'document-text-outline')
  .insert('Reports', 'stats-chart-outline');

const StorageWindow = new Window(
  'Storage',
  'apps-outline',
  '80rem',
  '40rem',
  StorageWindowMenu
);

export default new Widget('Login', 'apps-circle', StorageWindow, true);
