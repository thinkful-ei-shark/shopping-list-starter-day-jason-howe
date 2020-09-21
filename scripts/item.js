function validateName(name) {
  if (!name) {
    throw TypeError('Name must not be blank.');
  }
}

function create(itemName) {
  let itemObject = { id: cuid(), name: itemName, checked: false };
  return itemObject;
}

export default {
  validateName,
  create,
};
