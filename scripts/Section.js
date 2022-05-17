export class Section {
    constructor({items, renderer} , containerSelector) {
        this._initialArray = items;
        this._renderer = renderer; // renderer — это функция
        
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._renderer(element);
      }
    
      renderItems() {
        this._initialArray.forEach(element => {
          this._renderer(element);
        });
      }



}