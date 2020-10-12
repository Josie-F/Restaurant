const Item = require("./Item")
const Menu = require("./Menu")

const Restaurant = require("./Restaurant")

describe('Restaurants', () => {
    test('Restaurants have menus', () => {
        const menu = new Menu('A la Carte Menu', '🍽')
        const restaurant = new Restaurant(
            'Balthazar', 
            'https://www.themasterchefs.com/images/sized/images/articles/Luxury-food-600x600.jpg',
            'London'
        )
        restaurant.addMenu(menu)
        expect(restaurant.menus.length).toEqual(1)
        expect(restaurant.menus[0]).toBe(menu)
        
    })
    test('Restaurants can remove menus', () => {
        const restaurant = new Restaurant(
            'Balthazar',
            'https://www.themasterchefs.com/images/sized/images/articles/Luxury-food-600x600.jpg', 
            'London')
        const menu = new Menu('A La Carte Menu', '🍽')
        restaurant.addMenu(menu)
        expect(restaurant.menus.length).toBe(1)
        restaurant.deleteMenu(menu)
        expect(restaurant.menus.length).toBe(0)
    })
    test('Restaurants have menus with items', () => {
        const restaurant = new Restaurant(
            'Balthazar', 
            'https://www.themasterchefs.com/images/sized/images/articles/Luxury-food-600x600.jpg', 
            'London')
        const menu = new Menu('Drinks menu', '🍷')
        const item1 = new Item('Martini', 8)
        const item2 = new Item('Beer', 4)
        menu.addItem([item1, item2])
        restaurant.addMenu(menu)
        expect(restaurant.menus[0]).toBe(menu)
        expect(restaurant.menus[0].items[0].name).toBe('Martini')
        expect(restaurant.menus[0].items[1].name).toBe('Beer')
    })
    
    
})