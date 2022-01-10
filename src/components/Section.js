export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    renderItems()  {
        this._initialArray.forEach(item => {
            this.addItem(item)
        });
    }

    addItem(item) {
        const element = this._renderer(item)
        this._containerSelector.prepend(element);
    }
}