import ItemComponent from '../item/item';

let elements;

function createList(items) {
    const list = document.createElement('ul');
    elements = items.map(item => ItemComponent.createItem(item));
    elements.forEach(element => {
        list.append(element);
    });
    return list;
}

export default {
    createList
};