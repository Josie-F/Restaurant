const Menu = require('./Menu')
const Item = require('./Item')


describe('Menus', () => {
    test('Food menus have an icon', () => {
        const menu = new Menu('A la Carte Menu', '🍽')

        expect(menu.icon).toBe('🍽')
        expect(menu.title).toBe('A la Carte Menu')
    })
    test('Menus have a title', () => {
        const drinks = new Menu('Cocktails', '🥂')

        expect(drinks.title).toBe('Cocktails')
    })
    test('Menus have items', () => {
        const menu = new Menu('Drinks Menu', '🍷')
        const item = new Item('Martini', 8)
        expect(menu.items.length).toBe(0)
        menu.addItem([item])
        expect(menu.items.length).toBe(1)
        expect(menu.items[0]).toBe(item) 
        expect(menu.items[0].name).toBe('Martini')
    })
    test('Items can be removed from Menu',() => {
        const menu = new Menu('Breakfast Menu', '🥐')
        const item = new Item('Croissant and tea', 6)
        menu.addItem([item])
        expect(menu.items.length).toBe(1)
        menu.deleteItem(item)
        expect(menu.items.length).toEqual(0)
    } )
})