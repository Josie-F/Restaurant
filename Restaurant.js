class Restaurant {
    constructor(name, city ){
        this.name = name
        this.url = ''
        this.city = city
        this.menus = []
    }


addMenu(menu) {
this.menus.push(menu)
}

deleteMenu(menu) {
    const deletedmenu = this.menus.indexOf(menu)
    this.menus.splice(deletedmenu, 1)

}
}



module.exports=Restaurant