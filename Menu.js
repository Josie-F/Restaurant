class Menu {
    constructor(title, icon) {
        this.title = title
        this.icon = icon
        this.items = []

    }


addItem(item) {
    item.map((individualitem) => {
      this.items.push(individualitem)  
    })
}

deleteItem(item) {
    const deleteditem = this.items.indexOf(item)
    this.items.splice(deleteditem, 1)
}

}





module.exports = Menu