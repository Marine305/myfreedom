import './styles.css';

import ItemsListComponent from './items-list/items-list';
import ItemsService from './itemsService';

let list = ItemsListComponent.createList(ItemsService.getItems());
ItemsService.addItem({});
document.getElementById('app').append(list);