import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findByID(id) {
  return items.find((item) => item.id === id);
}

function addItem(itemName) {
  try {
    item.validateName(itemName);
    items.push(item.create(itemName));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  let foundItem = findByID(id);
  foundItem.checked = !foundItem.checked;
}

function findAndUpdateName(id, itemName) {
  try {
    item.validateName(itemName);
    let foundItem = findByID(id);
    foundItem.name = itemName;
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndDelete(id) {
    const foundItem = this.items.findIndex((item) => item.id === id);
    this.items.splice(foundItem, 1);
}

function toggleCheckedFilter() {
    hideCheckedItems = !hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndDelete,
  findAndUpdateName,
};
