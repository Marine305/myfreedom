
export default {
    getItems() {
        return JSON.parse(localStorage.items);
    },
    setItems(items) {
        localStorage.items = JSON.stringify(items);
    },
    addItem(item) {
        const items = this.getItems();
        items.push(item);
        this.setItems(items);
    },
    deleteItem(deleteItem) {
        const items = this.getItems();
        const deleteIndex = items.findIndex(item => item.id === deleteItem.id)
        items.splice(deleteIndex, 1);
        this.setItems(items);
    }
};